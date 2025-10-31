import { Skeleton } from './ui/skeleton'

export function WebhookListSkeleton() {
  return (
    <div className="space-y-1 p-2">
      {Array.from({ length: 20 }).map((_, i) => {
        return (
          <div key={i} className="flex items-center gap-3 px-4 py-2.5">
            <Skeleton className="size-4" />

            <div className="flex flex-1 min-w-0 items-start gap-3">
              <Skeleton className="h-4 w-12" />
              <div className="flex-1 min-w-0 space-y-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}