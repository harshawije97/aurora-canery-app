"use client"

import { PanelLeft, PanelLeftClose, PlayCircle } from "lucide-react"
import React from "react"
import { LESSONS } from "../page"

interface ModuleContentWrapperProps {
  children: React.ReactNode
}

function ModuleContentWrapper({ children }: ModuleContentWrapperProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false)
  const [activeLessonId, setActiveLessonId] = React.useState<string>("01")

  return (
    <>
      {/* Secondary sidebar */}
      <div
        className={`flex-col overflow-hidden rounded-2xl bg-[#F2F2F2]/60 transition-all duration-300 ${
          sidebarOpen ? "flex w-80 opacity-100" : "hidden w-0 opacity-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b border-[#E5E5E5] p-5">
          <div className="flex items-center gap-2.5">
            <h2 className="text-lg font-bold text-[#222222]">Procurement</h2>
            <span className="rounded-md bg-[#3B82F6] px-2.5 py-0.5 text-[11px] font-medium text-white">
              Playlist
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-md p-1 text-[#222222] transition-colors hover:bg-black/5"
            title="Close sidebar"
          >
            <PanelLeftClose className="h-5 w-5" />
          </button>
        </div>
        {/* Sidebar Content */}
        <div className="flex-1 divide-y divide-[#E5E5E5] overflow-y-auto">
          {LESSONS.map((lesson) => {
            const isActive = activeLessonId === lesson.id
            return (
              <button
                key={lesson.id}
                onClick={() => setActiveLessonId(lesson.id)}
                className={`flex w-full items-center gap-3.5 px-6 py-4 text-left transition-colors ${
                  isActive
                    ? "bg-[#D9E2EC] font-semibold text-[#222222]"
                    : "text-[#222222] hover:bg-[#EAEAEA]"
                }`}
              >
                <PlayCircle className="h-6 w-6 shrink-0 text-[#222222]" />
                <span className="text-sm font-medium">{lesson.title}</span>
              </button>
            )
          })}
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-1 flex-col gap-6">
        {!sidebarOpen && (
          <div className="flex w-fit items-center gap-3 rounded-xl bg-[#F2F2F2] px-5 py-3">
            <h2 className="text-lg font-bold text-[#222222]">Procurement</h2>
            <span className="rounded-md bg-[#3B82F6] px-2.5 py-0.5 text-[11px] font-medium text-white">
              Playlist
            </span>
            <button
              onClick={() => setSidebarOpen(true)}
              className="ml-2 rounded-md p-1 text-[#222222] transition-colors hover:bg-black/5"
              title="Open sidebar"
            >
              <PanelLeft className="h-5 w-5" />
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
