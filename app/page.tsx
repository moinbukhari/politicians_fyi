"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { politicians, type Politician } from "@/lib/politicians";
import { Badge } from "@/components/ui/badge";
import classNames from "classnames";

export default function Home() {
  const router = useRouter();
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

  const handleProfile = (politician: Politician) => {
    router.push(`/profile/${politician.id}`);
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

        <form onSubmit={handleSubmit} method="post" className="pt-2">
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

        <div className="text-center pt-2">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 px-10">
        {filteredPoliticians.map((politician, index) => (
          <Card
            key={index}
            onClick={() => handleProfile(politician)}
            className={classNames(
              "hover:shadow-md transition duration-300 cursor-pointer group",
              politician.party === "Labour" ? "border-red-200 hover:border-red-200 hover:bg-red-200/10" : "border-blue-200 hover:border-blue-200 hover:bg-blue-200/10",
            )}
          >
            <CardHeader>
              <CardTitle>{politician.name}</CardTitle>
              <CardDescription>{politician.constituency}</CardDescription>
              <CardDescription

              >
                <Badge variant={"outline"} className={`rounded-sm w-max ${politician.party === "Labour"
                    ? "bg-red-200 text-red-500"
                    : " bg-blue-200 text-blue-500"
                  }`}>{politician.party}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <figure className="overflow-hidden">
                <img src={politician.image} className="group-hover:scale-105 duration-200" />
              </figure>
            </CardContent>
            <CardFooter className="flex flex-col justify-center">
              <div className="flex gap-2 justify-between items-start w-[60%]">
                <div className="flex flex-col text-center justify-center items-center">
                  <div className="text-xl font-bold">{politician.vote}</div>
                  <div className="text-sm">Votes</div>
                </div>
                <div className="flex flex-col text-center justify-center items-center">
                  <div className="text-xl font-bold">
                    {politician.affiliationsFinances}
                  </div>
                  <div className="text-sm">Affiliations & Finances</div>
                </div>
                <div className="flex flex-col text-center justify-center items-center">
                  <div className="text-xl font-bold">
                    {politician.parliamentaryQuestions}
                  </div>
                  <div className="text-sm">Quotes</div>
                </div>
              </div>
            </CardFooter>
            <CardFooter>
              <Button className="w-max bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Write to MP {"->"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
