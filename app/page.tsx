import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
<section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Calynder is great
        <strong className="font-extrabold text-red-700 sm:block">
          for tracking your life.
        </strong>
      </h1>
      <p className="mt-4 sm:text-xl/relaxed">
        Science says our brains can handle roughly 8 bits of information at a time before it begins to lose track of things. Calynder was designed with that in mind - you can track all of your thoughts and have reminders sent wherever and whenever you need it. Give your brain a break.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>
        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
        <a className="">Already have an account? <a className="text-red-700, on-hover: underline"  href="/sign-in">Sign in</a> </a>
      </div>
    </div>
  </div>
</section>

  )
}
