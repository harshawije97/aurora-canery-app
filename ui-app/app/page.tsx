"use server"

import { redirect } from "next/navigation"

export default async function Page() {
  // Redirect to sign-in page
  const navigate = redirect("/auth/sign-in")
  return navigate
  return (
    <div className="flex min-h-svh p-6">
      <h2>Hello LMS</h2>
    </div>
  )
}
