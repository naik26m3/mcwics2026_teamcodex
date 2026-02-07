import React from "react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f2f4ed] dark:bg-[#0a0a0a] px-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white dark:bg-zinc-900 p-8 shadow-xl border border-zinc-200 dark:border-zinc-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-space-grotesk">Welcome Back</h2>
          <p className="mt-2 text-zinc-500">Enter your details to sign in to Quietly</p>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email address</label>
              <input type="email" required className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" required className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>

          <button type="submit" className="w-full py-3 px-4 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-lg font-semibold hover:opacity-90 transition">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500">
          Don&apos;t have an account? <Link href="/" className="text-blue-600 hover:underline">Go back home</Link>
        </p>
      </div>
    </div>
  )
}