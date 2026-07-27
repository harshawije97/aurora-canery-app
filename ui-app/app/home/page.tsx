import Navbar from "@/components/navbar"
import ModulePreviewCards, { MODULES_DATA } from "./_components/module-preview-cards"

function HomePage() {
  return (
    <div className="min-h-svh w-full">
      {/* Nav bar */}
      <Navbar />
      {/* Home Content */}
      <main className="mx-auto max-w-7xl py-10 md:px-0 lg:px-6">
        <div className="mb-8 flex items-baseline justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#222222]">
              Explore Modules
            </h1>
            <p className="mt-1 text-xs font-normal text-[#5C5C5C]">
              Pick up where you left off or dive into a new training program.
            </p>
          </div>
          <span className="text-xs font-medium text-[#5C5C5C]">
            Showing {MODULES_DATA.length} available courses
          </span>
        </div>
        <ModulePreviewCards />
      </main>
    </div>
  )
}

export default HomePage
