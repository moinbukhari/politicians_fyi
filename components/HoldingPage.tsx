"use client";
import { cn } from "@/lib/utils";
import { GridLoader } from "react-spinners";
import { IBM_Plex_Mono } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "UNCLASSIFIED.fyi: Find out what your MP is up to on the Palestine issue.",
  description:
    "From financial interests to voting records - find out what your local MP says and does regarding Palestine",
};

const font = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer/sharer.php?u=https://www.unclassified.fyi/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },

  {
    name: "Twitter",
    href: "https://twitter.com/intent/tweet?text=Check%20this%20out!&url=https://www.unclassified.fyi/",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=https://www.unclassified.fyi/",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width={24}
        height={24}
      >
        <path
          d="M72,104a32,32,0,0,1,32-32l16,32-12.32,18.47a48.19,48.19,0,0,0,25.85,25.85L152,136l32,16a32,32,0,0,1-32,32A80,80,0,0,1,72,104Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <path
          d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </svg>
    ),
  },
];

export default function HoldingPage() {
  return (
    <main className="h-full container ">
      <div className="font-mono flex flex-col h-full">
        <div className="flex flex-col md:flex-row items-center justify-center border-b border-gray-200 pb-6 pt-4">
          <div className="flex flex-col ">
            <h1
              className={cn(
                "text-center md:text-center text-3xl md:text-4xl font-bold text-primary -mb-1",
                font.className
              )}
            >
              {"unclassified.fyi"}
            </h1>
            <h2 className="text-sm font-mono mt-2">
              Find out what UK politicians are saying on issues affecting
              Palestine. Launching soon.
            </h2>
          </div>
        </div>
        <div className=" flex flex-col items-center h-full mb-4 text-center">
          <h2 className="text-6xl mt-20 font-bold mb-8 font-sans">
            We are launching soon!
          </h2>
          {/* <p>In the meantime, joing our mailing list to stay updated.</p> */}
          {/* <form className="mt-6 sm:flex sm:w-96 lg:mt-8">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none  border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Subscribe
              </button>
            </div>
          </form> */}
          <GridLoader color={"#7e838f"} className="mt-8" />
          <div className="mt-20 flex justify-center space-x-4">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
