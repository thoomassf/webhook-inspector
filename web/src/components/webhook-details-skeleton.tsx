import { SectionDataTable } from './section-data-table'
import { SectionTitle } from './section-title'
import { Skeleton } from './ui/skeleton'

export function WebhookDetailsSkeleton() {
  return (
    <div className="flex h-full w-full flex-col">
      {/* Header */}
      <div className="space-y-[19px] border-b border-zinc-700 p-6">
        <div className="flex items-center gap-3">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-7 w-80" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-48" />
          <div className="h-4 w-px bg-zinc-700" />
          <Skeleton className="h-5 w-56" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-6 p-6">
          {/* Request Overview */}
          <div className="space-y-4">
            <SectionTitle>Request Overview</SectionTitle>
            <SectionDataTable
              data={Array.from({ length: 4 }).map(() => ({
                key: <Skeleton className="h-5 w-24" />,
                value: <Skeleton className="h-5 w-64" />,
              }))}
            />
          </div>

          {/* Headers */}
          <div className="space-y-4">
            <SectionTitle>Headers</SectionTitle>
            <SectionDataTable
              data={Array.from({ length: 6 }).map(() => ({
                key: <Skeleton className="h-5 w-32" />,
                value: <Skeleton className="h-5 w-96" />,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
