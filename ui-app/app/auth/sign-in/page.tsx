"use client"
import React from "react"
import MainLogo from "./_components/main-logo"
import { ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

function SignInPage() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  //   navigate to home using userouter
  const router = useRouter()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    // Handle authentication logic here
    if (username === "harshawije99@gmail.com" && password === "password@123") {
      const navigate = router.push("/home")
      return navigate
    }
    alert("Invalid username or password")
  }
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 font-['Poppins',sans-serif]">
      <div className="flex w-full max-w-120 flex-col items-center rounded-2xl border border-[#F2F2F2] bg-[#FFFFFF] px-8 py-12 shadow-sm md:px-12 md:py-16">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-1 text-sm font-normal text-[#5C5C5C]">Sign in</p>
          <div className="flex items-center justify-center gap-2">
            <MainLogo />
            <span className="text-2xl font-bold tracking-tight text-[#dc4e74]">
              Aurora LMS
            </span>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="space-y-1.5">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-[#222222]"
            >
              Email Address
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=""
              className="h-11 w-full rounded-lg border border-[#F2F2F2] bg-[#FFFFFF] px-3.5 text-[#222222] placeholder-[#5C5C5C] transition-all focus:border-transparent focus:ring-2 focus:ring-[#DA1249] focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-[#222222]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              className="h-11 w-full rounded-lg border border-[#F2F2F2] bg-[#FFFFFF] px-3.5 text-[#222222] placeholder-[#5C5C5C] transition-all focus:border-transparent focus:ring-2 focus:ring-[#DA1249] focus:outline-none"
              required
            />
          </div>

          {/* Primary Submit Button */}
          <div className="flex justify-center pt-3">
            <button
              type="submit"
              className="w-32 rounded-lg bg-[#DA1249] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-150 hover:bg-[#b80e3a] focus:ring-2 focus:ring-[#DA1249] focus:ring-offset-2 focus:outline-none active:bg-[#990b30]"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer Link Section */}
        <div className="mt-10 flex items-center gap-1 text-sm">
          <span className="text-[#5C5C5C]">Don&apos;t have an account?</span>
          <a
            href="#"
            className="inline-flex items-center gap-0.5 font-medium text-[#DA1249] transition-colors hover:underline"
          >
            Request access
            <ChevronRight className="h-4 w-4 text-[#DA1249]" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
