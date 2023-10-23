"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { politicians, type Politician } from "@/lib/politicians";
import HomepageCard from "@/components/homepage-card";

export default function Home() {
  const [input, setInput] = useState("");
  const [filteredPoliticians, setFilteredPoliticians] =
    useState<Politician[]>(politicians);

  const handleFilter = () => {
    const inputValue = input.toLowerCase();
    const filtered = politicians.filter((politician) => {
      return (
        politician.name.toLowerCase().includes(inputValue) ||
        politician.constituency.toLowerCase().includes(inputValue) ||
        politician.party.toLowerCase().includes(inputValue)
      );
    });

    setFilteredPoliticians(filtered);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleFilter();
  };

  return (
    <main className="w-full min-h-screen flex flex-col md:pt-20 bg-[#F9F8F6]">
      <div>
        <div className="text-center pb-2">
          <h1 className="text-4xl md:text-5xl font-black text-black pb-3">
            What is my MP saying?
          </h1>
          <h3 className="text-base md:text-lg text-666565">
            Find out what UK politicians are saying on issues affecting
            Palestine.
          </h3>
        </div>

        <form onSubmit={handleSubmit} method="post" className="pt-2 px-4">
          <div className="relative w-full text-center">
            <div className="inline-block relative w-full md:max-w-2xl">
              <input
                placeholder="Search by party, constituency or MP"
                onChange={({ target }) => setInput(target.value)}
                className="py-2 text-sm md:text-base rounded-md pl-10 border border-#F3E6E6 w-full"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </form>

        <div className="text-center pt-2 px-4">
          Share on{" "}
          <a href="#" className="text-blue-500 underline pr-0.1">
            Twitter
          </a>{" "}
          <a href="#" className="text-blue-500 underline">
            Instagram
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-500 underline">
            WhatsApp/Text
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 px-4">
        {filteredPoliticians.map((politician, index) => <HomepageCard key={index} politician={politician} />)}
      </div>
    </main>
  );
}
