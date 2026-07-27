"use client"

import React from "react"
import ModuleContentWrapper from "./module-content-wrapper"
import { Bookmark, CheckCircle2, Clock, Download, FileText, Share2, Sparkles, Star, User } from "lucide-react"

function ModuleContent() {
  const [isBookmarked, setIsBookmarked] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<
    "overview" | "resources" | "notes"
  >("overview")
  return (
    <ModuleContentWrapper>
      <div className="w-full space-y-6">
        {/* Video Placeholder Container */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-[#F2F2F2] bg-[#18181B] shadow-xl shadow-black/5 transition-all duration-300">
          <div className="relative aspect-video w-full overflow-hidden">
            <iframe
              className="absolute top-0 left-0 h-full w-full border-0"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="Lesson Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Lesson Information Section */}
      <div className="space-y-6 pt-1">
        <div className="flex flex-col gap-4 border-b border-[#F2F2F2] pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl space-y-2.5">
            {/* Title card */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#5C5C5C]">
              <span className="rounded-full bg-[#DA1249]/10 px-3 py-1 font-semibold text-[#DA1249]">
                Procurement
              </span>
              <span>•</span>
              <div className="flex items-center gap-1 font-medium text-amber-500">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-[#222222]">4.9</span>
                <span className="text-[#5C5C5C]">(128 reviews)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-[#5C5C5C]" />
                <span>18 mins</span>
              </div>
            </div>
            {/* Main Lesson Title */}
            <h1 className="text-2xl font-bold tracking-tight text-[#222222] sm:text-3xl">
              Lesson 01: How to create new procurement entry
            </h1>
            {/* Author / Instructor Info */}
            <div className="flex items-center gap-2 pt-1 text-xs text-[#5C5C5C]">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F2F2F2] text-[#222222]">
                <User className="h-3.5 w-3.5" />
              </div>
              <span>
                Taught by{" "}
                <strong className="font-semibold text-[#222222]">
                  Emetsoft Operations Team
                </strong>
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-start pt-1">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="flex items-center gap-2 rounded-full border border-[#F2F2F2] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#222222] shadow-xs transition-all hover:bg-[#F2F2F2] active:scale-95"
            >
              <Bookmark
                className={`h-4 w-4 ${
                  isBookmarked
                    ? "fill-[#DA1249] text-[#DA1249]"
                    : "text-[#222222]"
                }`}
              />
              <span>{isBookmarked ? "Saved" : "Save"}</span>
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F2F2F2] bg-[#FFFFFF] text-[#222222] shadow-xs transition-all hover:bg-[#F2F2F2] active:scale-95">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-4 pb-9">
          {/* Tabs header */}
          <div className="flex items-center gap-6 border-b border-[#F2F2F2]">
            <button
              onClick={() => setActiveTab("overview")}
              className={`relative pb-3 text-xs font-semibold transition-all ${
                activeTab === "overview"
                  ? "text-[#DA1249]"
                  : "text-[#5C5C5C] hover:text-[#222222]"
              }`}
            >
              Overview
              {activeTab === "overview" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#DA1249]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`relative pb-3 text-xs font-semibold transition-all ${
                activeTab === "resources"
                  ? "text-[#DA1249]"
                  : "text-[#5C5C5C] hover:text-[#222222]"
              }`}
            >
              Resources (2)
              {activeTab === "resources" && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#DA1249]" />
              )}
            </button>
          </div>

          {/* Tab Content: Overview */}
          {activeTab === "overview" && (
            <div className="max-w-4xl space-y-6 pt-1">
              <p className="text-xs leading-relaxed text-[#5C5C5C]">
                In this introductory lesson, you will learn the step-by-step
                procedure for initializing and submitting a formal procurement
                request in the system. We cover requisition guidelines, supplier
                quotation verification, approval flows, and audit trail
                generation.
              </p>

              {/* What You'll Learn Box (Udemy card feature) */}
              <div className="space-y-3 rounded-2xl border border-[#F2F2F2] bg-[#F2F2F2]/50 p-5">
                <h3 className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#222222] uppercase">
                  <Sparkles className="h-4 w-4 text-[#DA1249]" />
                  What you&apos;ll learn in this lesson
                </h3>
                <div className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
                  {[
                    "Navigating the procurement entry wizard",
                    "Attaching vendor quotations & compliance files",
                    "Understanding approval threshold limits",
                    "Tracking requisition status in real time",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#222222]"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#DA1249]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Resources */}
          {activeTab === "resources" && (
            <div className="max-w-xl space-y-3 pt-1">
              {[
                { name: "Procurement_Checklist_2026.pdf", size: "1.2 MB" },
                { name: "Vendor_Quotation_Template.xlsx", size: "450 KB" },
              ].map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl border border-[#F2F2F2] bg-[#FFFFFF] p-3.5 shadow-xs transition-colors hover:border-gray-300"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#DA1249]" />
                    <div>
                      <p className="text-xs font-semibold text-[#222222]">
                        {file.name}
                      </p>
                      <p className="text-[11px] text-[#5C5C5C]">{file.size}</p>
                    </div>
                  </div>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2F2F2] transition-colors hover:bg-[#222222] hover:text-white">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ModuleContentWrapper>
  )
}

export default ModuleContent
