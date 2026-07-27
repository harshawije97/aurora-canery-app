import Navbar from "@/components/navbar"
import React from "react"
import ModuleContent from "./_components/module-content"

export const LESSONS = [
  { id: "01", title: "Lesson 01", active: true },
  { id: "02", title: "Lesson 02", active: false },
  { id: "03", title: "Lesson 03", active: false },
  { id: "04", title: "Lesson 04", active: false },
  { id: "05", title: "Lesson 05", active: false },
  { id: "06", title: "Lesson 06", active: false },
  { id: "07", title: "Lesson 07", active: false },
]

interface PageProps {
  params: Promise<{ id: string }>
}

async function SingleModulePage({ params }: PageProps) {
  const { id } = await params
  return (
    <div className="min-h-svh w-full">
      <Navbar />
      {/* Main content */}
      <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-[1600px] gap-6 p-6">
        <ModuleContent />
      </div>
    </div>
  )
}

export default SingleModulePage
