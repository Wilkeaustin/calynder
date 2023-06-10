import React from "react"
import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="">
        
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              The <b className="text-red-700">Mission</b> at Calynder.
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                
                src="https://i.pinimg.com/736x/87/a9/c5/87a9c51bee476df3b5ef608179f60f5f--project-management-healthy-tips.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                alt="Party"
                width={800}
                height={500}
              />
            </div>
            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Calynder's exists to solve just <b className="text-yellow-500">two</b> problems. Both of which are my own - struggling to structure my life in a way that makes me more productive and successful, and landing a job.
                </p>
                <p>
                  Hello, I am Austin Wilke. I am a 28 year old dad to nearly <b className="text-red-700">FOUR</b> children. Yes...you read that right. I have my hands full, and so finding the time outside of being a husband, dad, and full-time employee to pursue being a developer can be tough. Nevertheless, I have been building and making updates to my site to show my worth to possible employers, as well as giving myself a more structured way to learn to code outside of just surfing the trenches of YouTube suggested coding videos - we all know that's a never ending spiral.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
