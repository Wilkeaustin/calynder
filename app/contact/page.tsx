import React from "react";

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function Contact() {
    return (
        <div>
    <div className="contact">
    <>
    {/*
    Heads up! 👋

    Plugins:
        - @tailwindcss/forms
    */}
    <section className="bg-gray-100 dark:bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
               I am eager to hear your feedback! If you have a request for the site leave your information below and I will get in touch with you. Otherwise, thank you for taking the time to view my application! It means a lot.
            </p>
            <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                Are you hiring?
                </a>
                <address className="mt-2 not-italic">
                If you are hiring, feel free to contact me through my <a className="font-bold text-blue-500" href="https://www.linkedin.com/in/austinwilke123/">LinkedIn</a>. I look at it every day so I should get back with you quickly as I am currently in the job market.
                </address>
            </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
                <div>
                <label className="sr-only" htmlFor="name">
                    Name
                </label>
                <input
                    className="w-full rounded-lg border-gray-200 bg-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label className="sr-only" htmlFor="email">
                    Email
                    </label>
                    <input
                    className="w-full rounded-lg bg-gray-200 border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    />
                </div>
                <div>
                    <label className="sr-only" htmlFor="phone">
                    Phone
                    </label>
                    <input
                    className="w-full rounded-lg bg-gray-200 border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    />
                </div>
                </div>
                
                <div>
                <label className="sr-only" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="w-full rounded-lg bg-gray-200 border-gray-200 p-3 text-sm"
                    placeholder="What are your thoughts on the site?"
                    rows={8}
                    id="message"
                    defaultValue={""}
                />
                </div>
                <div className="mt-4">
                <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                    Send Feedback
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    </section>
    </>


</div>
    
        </div>
    )
}