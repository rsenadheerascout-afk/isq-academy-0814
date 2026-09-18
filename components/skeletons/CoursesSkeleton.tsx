export default function CoursesSkeleton() {
  return (
    <div className="min-h-screen bg-white font-sans text-black font-normal animate-pulse">
      {/* Breadcrumbs Skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2">
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
        <div className="h-4 w-4 bg-gray-200 rounded"></div>
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* Page Header Skeleton */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#F3D25A]/30 to-[#00BEB2]/20 border-b border-[#00BEB2]/30 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="h-10 w-64 bg-gray-300/70 rounded mb-4"></div>
          {/* Description line 1 & 2 */}
          <div className="h-5 w-full max-w-xl bg-gray-300/50 rounded mb-2"></div>
          <div className="h-5 w-3/4 max-w-md bg-gray-300/50 rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters Skeleton */}
        <aside className="w-full md:w-1/4">
          <div className="sticky top-28">
            {/* Filter Title */}
            <div className="h-7 w-28 bg-gray-200 rounded mb-6 pb-2"></div>

            {/* Subject Area Skeleton */}
            <div className="mb-8">
              <div className="h-5 w-32 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration Skeleton */}
            <div className="mb-8">
              <div className="h-5 w-24 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-28 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Course Grid Skeleton */}
        <main className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 shadow-sm flex flex-col h-[480px]"
            >
              {/* Course Image Skeleton */}
              <div className="h-48 bg-gray-200 w-full shrink-0"></div>

              {/* Course Details Skeleton */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Category */}
                  <div className="h-3 w-20 bg-gray-200 rounded mb-3"></div>

                  {/* Title */}
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>

                  {/* Description */}
                  <div className="space-y-2 mb-6">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Course Meta Skeleton */}
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center gap-4">
                  <div>
                    <div className="h-3 w-20 bg-gray-200 rounded mb-1"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="h-3 w-16 bg-gray-200 rounded mb-1"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}