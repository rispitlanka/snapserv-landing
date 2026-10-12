import { Skeleton } from "@/components/ui";

/** Page-level skeleton Next.js shows while a route is loading. */
export default function Loading() {
  return (
    <div role="status" aria-label="Loading page" className="min-h-screen bg-page">
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 md:px-12">
          <div className="flex items-center gap-2.5">
            <Skeleton className="size-[42px] rounded-full" />
            <Skeleton className="h-5 w-28" />
          </div>
          <Skeleton className="h-11 w-32 rounded-[10px]" />
        </div>
      </div>
      <div className="bg-white px-5 pb-16 pt-20 md:px-12">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-5">
          <Skeleton className="h-8 w-80 rounded-full" />
          <Skeleton className="h-14 w-full max-w-[760px]" />
          <Skeleton className="h-14 w-full max-w-[560px]" />
          <Skeleton className="h-5 w-full max-w-[620px]" />
          <div className="flex gap-3">
            <Skeleton className="h-14 w-48 rounded-xl" />
            <Skeleton className="h-14 w-48 rounded-xl" />
          </div>
          <Skeleton className="mt-8 h-[420px] w-full rounded-[18px]" />
        </div>
      </div>
    </div>
  );
}
