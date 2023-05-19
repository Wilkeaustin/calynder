import React from 'react';

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function Page() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <h1 className="text-3xl font-medium sm:text-5xl">
                Calynder is personal to me because it was designed to solve a common problem of my own. I often found myself avoiding things simply because I had no structure in my life.
            </h1>
        </div>
    )
} 

