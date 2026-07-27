import React from "react"
import MainLogo from "@/app/auth/sign-in/_components/main-logo"
import { Bell, Home, Search, Settings, Tv } from "lucide-react"
import Navbar from "@/components/navbar"
import ModulePreviewCards from "./_components/module-preview-cards"

function HomePage() {
  return (
    <div className="min-h-svh w-full">
      {/* Nav bar */}
      <Navbar />
      {/* Home Content */}
      <main className="mx-auto max-w-7xl py-10 md:px-0 lg:px-6">
        <h1 className="mb-8 text-2xl font-bold text-[#222222]">Modules</h1>
        <ModulePreviewCards />
      </main>
    </div>
  )
}

export default HomePage
