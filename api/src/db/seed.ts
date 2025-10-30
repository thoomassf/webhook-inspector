import { faker } from '@faker-js/faker'
import { db } from './index'
import { webhooks } from './schema'

const stripeEventTypes = [
  'charge.succeeded',
  'charge.failed',
  'charge.refunded',
  'customer.created',
  'customer.updated',
  'customer.deleted',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'invoice.created',
  'invoice.payment_succeeded',
  'invoice.payment_failed',
  'payment_intent.succeeded',
  'payment_intent.created',
  'checkout.session.completed',
]

function generateStripeWebhookBody(eventType: string) {
  const id = `evt_${faker.string.alphanumeric(24)}`
  const objectId = `${eventType.split('.')[0]}_${faker.string.alphanumeric(24)}`

  return {
    id,
    object: 'event',
    api_version: '2022-11-15',
    created: faker.date.past().getTime() / 1000,
    data: {
      object: {
        id: objectId,
        object: eventType.split('.')[0],
        amount:
          eventType.includes('charge') || eventType.includes('payment_intent')
            ? faker.finance.amount({ min: 1000, max: 50000, dec: 0 })
            : undefined,
        currency: eventType.includes('charge') ? 'brl' : undefined,
        customer: `cus_${faker.string.alphanumeric(14)}`,
        status: eventType.includes('succeeded') ? 'succeeded' : 'requires_payment_method',
      },
    },
    livemode: false,
    pending_webhooks: faker.number.int({ min: 0, max: 3 }),
    request: {
      id: `req_${faker.string.alphanumeric(14)}`,
      idempotency_key: faker.string.uuid(),
    },
    type: eventType,
  }
}

async function seed() {
  console.log('🌱 Seeding database...')

  await db.delete(webhooks)
  console.log('🗑️  Deleted all existing webhooks.')

  const webhooksToInsert = []

  for (let i = 0; i < 60; i++) {
    const eventType = faker.helpers.arrayElement(stripeEventTypes)
    const bodyObject = generateStripeWebhookBody(eventType)
    const body = JSON.stringify(bodyObject, null, 2)

    webhooksToInsert.push({
      method: 'POST',
      pathname: '/v1/webhooks/stripe',
      ip: faker.internet.ip(),
      contentType: 'application/json; charset=utf-8',
      contentLength: body.length,
      headers: {
        'user-agent': 'Stripe/1.0 (+https://stripe.com/docs/webhooks)',
        'stripe-signature': `t=${bodyObject.created},v1=${faker.string.hexadecimal({ length: 64, casing: 'lower' })}`,
        'content-type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body, null, 2),
      createdAt: new Date(bodyObject.created * 1000),
    })
  }

  await db.insert(webhooks).values(webhooksToInsert)

  console.log(`✅ Seeded ${webhooksToInsert.length} webhooks.`)
  console.log('Database seeding complete! 🌱')
  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Error seeding database:', err)
  process.exit(1)
})