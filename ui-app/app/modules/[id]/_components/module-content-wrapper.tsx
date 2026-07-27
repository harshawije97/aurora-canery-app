"use client"

import { PanelLeft, PanelLeftClose, SquarePlay } from "lucide-react"
import React from "react"
import { LESSONS } from "../page"

interface ModuleContentWrapperProps {
  children: React.ReactNode
}

function ModuleContentWrapper({ children }: ModuleContentWrapperProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(true)
  const [activeLessonId, setActiveLessonId] = React.useState<string>("01")

  return (
    <>
      {/* Secondary sidebar */}
      <div
        className={`mx-auto grid max-w-[1600px] gap-6 transition-[grid-template-columns] duration-300 ease-in-out ${
          sidebarOpen
            ? "grid-cols-1 lg:grid-cols-[320px_1fr]"
            : "grid-cols-1 lg:grid-cols-[0px_1fr]"
        }`}
      >
        <aside
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            sidebarOpen
              ? "pointer-events-auto translate-x-0 opacity-100"
              : "pointer-events-none -translate-x-4 opacity-0"
          }`}
        >
          <div className="flex h-full w-[320px] flex-col rounded-2xl border border-[#F2F2F2] bg-[#FFFFFF] shadow-lg shadow-black/5">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between border-b border-[#F2F2F2] px-5 py-4">
              <div className="flex items-center gap-2.5">
                <h2 className="text-sm font-semibold text-[#222222]">
                  Procurement
                </h2>
                {/* Airbnb-style subtle pill badge */}
                <span className="rounded-full bg-[#F2F2F2] px-2.5 py-0.5 text-[11px] font-medium text-[#5C5C5C]">
                  Playlist
                </span>
              </div>

              {/* Circular Close Button */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#222222] transition-colors hover:bg-[#F2F2F2]"
                title="Close sidebar"
              >
                <PanelLeftClose className="h-4 w-4" />
              </button>
            </div>

            {/* Sidebar Content (Lesson Items) */}
            <div className="flex-1 space-y-1 overflow-y-auto p-3">
              {LESSONS.map((lesson) => {
                const isActive = activeLessonId === lesson.id
                return (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLessonId(lesson.id)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left transition-all duration-150 ${
                      isActive
                        ? "bg-[#222222] text-[#FFFFFF]"
                        : "text-[#222222] hover:bg-[#F2F2F2]"
                    }`}
                  >
                    {/* Icon styling adapts to active dark state */}
                    <SquarePlay
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        isActive
                          ? "text-[#DA1249]"
                          : "text-[#5C5C5C] group-hover:text-[#222222]"
                      }`}
                    />
                    <span className="text-xs font-medium tracking-tight">
                      {lesson.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </aside>
      </div>
      {/* Main content */}
      <div className="flex flex-1 flex-col gap-6">
        {!sidebarOpen && (
          <div className="flex w-fit items-center gap-3 rounded-full border border-[#F2F2F2] bg-[#FFFFFF] px-4 py-2 shadow-md shadow-black/5">
            {/* Module Title */}
            <h2 className="text-sm font-semibold text-[#222222]">
              Procurement
            </h2>

            {/* Soft Airbnb-style Pill Tag */}
            <span className="rounded-full bg-[#F2F2F2] px-3 py-1 text-[11px] font-medium text-[#5C5C5C]">
              Playlist
            </span>

            {/* Visual Divider */}
            <div className="h-4 w-px bg-[#F2F2F2]" />

            {/* Circular Icon Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#222222] hover:bg-[#F2F2F2]"
              title="Open sidebar"
            >
              <PanelLeft className="h-4 w-4" />
            </button>
          </div>
        )}
        {/* Video Placeholder Container */}
        {children}
      </div>
    </>
  )
}

export default ModuleContentWrapper
