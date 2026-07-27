/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Bookmark } from "lucide-react"
import React from "react"

// Dummy data
const modules: any = [
  {
    id: 1,
    isSkeleton: true, // First item is represented as a structured skeleton placeholder card
  },
  {
    id: 2,
    title: "Procurement",
    description: "Purchasing, tendering, quotation calling and process",
    bookmarked: false,
  },
  {
    id: 3,
    title: "Administration & HRM",
    description: "HR, administration, requirements, Personal Files",
    bookmarked: false,
  },
  {
    id: 4,
    title: "Procurement",
    description: "Purchasing, tendering, quotation calling and process",
    bookmarked: false,
  },
  {
    id: 5,
    title: "Procurement",
    description: "Purchasing, tendering, quotation calling and process",
    bookmarked: false,
  },
  {
    id: 6,
    title: "Procurement",
    description: "Purchasing, tendering, quotation calling and process",
    bookmarked: false,
  },
]

function ModulePreviewCards() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {modules.map((module: any) => {
        if (module.isSkeleton) {
          return (
            /* Card 1: Skeleton Box Layout */
            <div
              key={module.id}
              className="space-y-4 rounded-2xl border border-[#F2F2F2] bg-[#FFFFFF] p-5"
            >
              <div className="h-36 w-full rounded-xl bg-[#F2F2F2]" />
              <div className="space-y-2.5 pt-1">
                <div className="h-7 w-full rounded-md bg-[#F2F2F2]" />
                <div className="h-4 w-full rounded-md bg-[#F2F2F2]" />
                <div className="h-4 w-full rounded-md bg-[#F2F2F2]" />
                <div className="h-4 w-full rounded-md bg-[#F2F2F2]" />
                <div className="h-4 w-3/4 rounded-md bg-[#F2F2F2]" />
              </div>
            </div>
          )
        }

        return (
          /* Standard Module Cards */
          <div
            key={module.id}
            className="flex flex-col justify-between rounded-2xl border border-[#F2F2F2] bg-[#FFFFFF] p-1 pb-6 transition-all hover:shadow-sm"
          >
            <div>
              {/* Image Placeholder with Bookmark Icon */}
              {/* <div className="relative mb-5 h-36 w-full rounded-xl bg-[#F2F2F2] p-3">
                <button
                  onClick={() => toggleBookmark(module.id)}
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg border border-[#F2F2F2] bg-[#FFFFFF] transition-colors hover:bg-gray-50"
                  aria-label="Bookmark"
                >
                  <Bookmark
                    className={`h-4 w-4 ${
                      bookmarks[module.id]
                        ? "fill-[#DA1249] text-[#DA1249]"
                        : "text-[#222222]"
                    }`}
                  />
                </button>
              </div> */}

              {/* Module Text Content */}
              <div className="space-y-2 px-5">
                <h2 className="text-lg font-bold text-[#222222]">
                  {module.title}
                </h2>
                <p className="line-clamp-2 text-xs leading-relaxed text-[#5C5C5C]">
                  {module.description}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="px-5 pt-6">
              <button className="rounded-lg bg-[#DA1249] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#b80e3a]">
                Start Module
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ModulePreviewCards
