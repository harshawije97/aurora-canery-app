/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Bookmark } from "lucide-react"
import React from "react"
import PreviewCard from "./preview-card"

// Dummy data
export const MODULES_DATA: any = [
  {
    id: 1,
    title: "Procurement & Strategic Sourcing",
    category: "Operations",
    description:
      "Master tendering, vendor evaluation, quotation analysis, and end-to-end purchasing workflows.",
    lessonsCount: 12,
    duration: "4.5 hrs",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Administration & Human Resources Management",
    category: "HR & Management",
    description:
      "Comprehensive guide to corporate administration, personnel record management, and onboarding compliance.",
    lessonsCount: 18,
    duration: "6.0 hrs",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Financial Governance & Budgeting",
    category: "Finance",
    description:
      "Learn financial reporting, budget oversight, auditing procedures, and fiscal risk management.",
    lessonsCount: 9,
    duration: "3.2 hrs",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Supply Chain & Logistics Management",
    category: "Logistics",
    description:
      "Optimize inventory control, warehousing operations, distribution networks, and freight handling.",
    lessonsCount: 15,
    duration: "5.5 hrs",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "IT Infrastructure & Security Compliance",
    category: "Technology",
    description:
      "Ensure enterprise software security standards, digital asset management, and IT policy alignment.",
    lessonsCount: 10,
    duration: "4.0 hrs",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1510511459019-5dee997dd1db?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Legal Risk & Contract Lifecycle Management",
    category: "Legal",
    description:
      "Understand contract drafting, liability clauses, dispute resolution, and regulatory compliance.",
    lessonsCount: 14,
    duration: "5.0 hrs",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop",
  },
]

function ModulePreviewCards() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex animate-pulse flex-col justify-between overflow-hidden rounded-2xl border border-[#F2F2F2] bg-[#FFFFFF]"
            >
              <div>
                {/* Image Placeholder Skeleton */}
                <div className="h-48 w-full bg-[#F2F2F2]" />
                {/* Content Skeletons */}
                <div className="space-y-3 p-5">
                  <div className="h-4 w-20 rounded-full bg-[#F2F2F2]" />
                  <div className="h-5 w-4/5 rounded-md bg-[#F2F2F2]" />
                  <div className="space-y-2 pt-1">
                    <div className="h-3 w-full rounded-md bg-[#F2F2F2]" />
                    <div className="h-3 w-3/4 rounded-md bg-[#F2F2F2]" />
                  </div>
                </div>
              </div>
              {/* Footer Skeleton */}
              <div className="mt-4 flex items-center justify-between border-t border-[#F2F2F2]/60 px-5 pt-2 pb-5">
                <div className="h-4 w-24 rounded-md bg-[#F2F2F2]" />
                <div className="h-8 w-24 rounded-lg bg-[#F2F2F2]" />
              </div>
            </div>
          ))
        : MODULES_DATA.map((module: any) => (
            <PreviewCard module={module} key={module.id} />
          ))}
    </div>
  )
}

export default ModulePreviewCards
