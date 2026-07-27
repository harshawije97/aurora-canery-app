"use client"
import MainLogo from "@/app/auth/sign-in/_components/main-logo"
import { Search, Home, Tv, Bell, Settings } from "lucide-react"
import React from "react"

function Navbar() {
  const [activeTab, setActiveTab] = React.useState<"home" | "channels">("home")
  const [bookmarks, setBookmarks] = React.useState<Record<number, boolean>>({})

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) => ({ ...prev, [id]: !prev[id] }))
  }
  return (
    <>
      <header className="sticky top-0 z-10 flex w-full items-center justify-between border-b border-[#F2F2F2] bg-[#FFFFFF] px-6 py-3.5">
        <div className="flex items-center gap-2.5">
          <MainLogo />
          <span className="text-xl font-bold tracking-tight text-[#DA1249]">
            Aurora LMS
          </span>
        </div>
        {/* Search Bar */}
        <div className="mx-8 max-w-sm flex-1">
          <div className="relative">
            <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#5C5C5C]" />
            <input
              type="text"
              placeholder="Search"
              className="h-9 w-full rounded-lg border border-[#F2F2F2] bg-[#FFFFFF] pr-4 pl-10 text-sm text-[#222222] placeholder-[#5C5C5C] transition-all focus:border-transparent focus:ring-2 focus:ring-[#DA1249] focus:outline-none"
            />
          </div>
        </div>
        {/* Header Right Actions */}
        <div className="flex items-center gap-4">
          {/* Nav Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                activeTab === "home"
                  ? "bg-[#F2F2F2] text-[#222222]"
                  : "text-[#5C5C5C] hover:bg-[#F2F2F2]/50"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => setActiveTab("channels")}
              className={`flex items-center gap-2 rounded-lg border border-[#F2F2F2] px-4 py-1.5 text-sm font-medium transition-all ${
                activeTab === "channels"
                  ? "bg-[#F2F2F2] text-[#222222]"
                  : "text-[#222222] hover:bg-[#F2F2F2]"
              }`}
            >
              <Tv className="h-4 w-4 text-[#5C5C5C]" />
              <span>Channels</span>
            </button>
          </div>
          {/* Action Icons */}
          <div className="flex items-center gap-1 pl-2 text-[#222222]">
            <button className="rounded-lg p-2 transition-colors hover:bg-[#F2F2F2]">
              <Bell className="h-5 w-5 text-[#222222]" />
            </button>
            <button className="rounded-lg p-2 transition-colors hover:bg-[#F2F2F2]">
              <Settings className="h-5 w-5 text-[#222222]" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
