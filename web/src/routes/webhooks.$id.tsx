import { createFileRoute } from '@tanstack/react-router'
import { WebhookDetails } from '../components/webhook-details'
import { Suspense } from 'react'
import { WebhookDetailsSkeleton } from '../components/webhook-details-skeleton'

export const Route = createFileRoute('/webhooks/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  return (
    <Suspense fallback={<WebhookDetailsSkeleton />}>
      <WebhookDetails id={id} />
    </Suspense>
  )
}
