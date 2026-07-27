/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Bookmark, BookOpen, ChevronRight, Clock, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

function PreviewCard({ module }: any) {
  const [bookmarks, setBookmarks] = React.useState<Record<number, boolean>>({})
  const isBookmarked = !!bookmarks[module.id]
  const router = useRouter()

  const toggleBookmark = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const onNavigateModule = () => {
    // Execute custom logic here if needed
    router.push(`/modules/${module.id}`)
  }
  return (
    <>
      <div>
        {/* Image Preview Container (With Hover Zoom) */}
        <div className="relative h-48 w-full overflow-hidden bg-[#F2F2F2]">
          <img
            src={module.image}
            alt={module.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />

          {/* Category Badge */}
          <span className="absolute top-3.5 left-3.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#222222] shadow-xs backdrop-blur-md">
            {module.category}
          </span>

          {/* Bookmark Action Button */}
          <button
            onClick={(e) => toggleBookmark(module.id, e)}
            className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-md transition-all hover:bg-white"
            aria-label="Save module"
          >
            <Bookmark
              className={`h-4 w-4 transition-colors ${
                isBookmarked
                  ? "fill-[#DA1249] text-[#DA1249]"
                  : "text-[#222222]"
              }`}
            />
          </button>
        </div>

        {/* Card Content Details */}
        <div className="space-y-2.5 p-5">
          {/* Rating Row */}
          <div className="flex items-center gap-1.5 text-xs text-[#5C5C5C]">
            <div className="flex items-center gap-1 font-semibold text-amber-500">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>{module.rating}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5 text-[#5C5C5C]" />
              <span>{module.lessonsCount} lessons</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-[#5C5C5C]" />
              <span>{module.duration}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="line-clamp-1 text-base font-bold text-[#222222] transition-colors group-hover:text-[#DA1249]">
            {module.title}
          </h2>

          {/* Description */}
          <p className="line-clamp-2 text-xs leading-relaxed text-[#5C5C5C]">
            {module.description}
          </p>
        </div>
        {/* Footer Action */}
        <div className="flex items-center justify-between border-t border-[#F2F2F2] px-5 pt-3 pb-5">
          <button
            type="button"
            onClick={() => onNavigateModule()}
            className="flex items-center gap-1.5 rounded-xl bg-[#DA1249] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all duration-150 hover:bg-[#b80e3a] active:scale-95"
          >
            <span>Start Module</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </>
  )
}

export default PreviewCard
