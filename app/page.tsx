"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import Image from "next/image";
import { Button } from "../components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [input, setInput] = useState("");
	const router = useRouter();

  const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push("/profile");
	}

  return (
    <main className="w-full flex flex-col">
			<section className="w-full flex flex-col min-h-screen justify-center relative">
				<div className="w-full max-w-6xl mx-auto px-4 flex flex-col relative">
					<div className="w-full absolute flex flex-row justify-center -top-[450px]">
						<Image src="/assets/rishi.png" width={800} height={400} alt="rishi" />
					</div>
					<form
						className={classNames(
							"w-[600px] mx-auto bg-gray-100 rounded-full overflow-hidden flex flex-row gap-4 items-center px-1",
							"focus-within:bg-gray-200 duration-200 z-10"
						)}
						onSubmit={handleSubmit}
						method="post"
					>
						<input
							className="w-full py-3 px-4 bg-transparent text-lg focus:outline-none"
							placeholder="Enter the name of a politician or cause"
							onChange={({ target }) => setInput(target.value)}
						/>
						<button
							className={classNames(
								"w-12 h-12 rounded-full bg-blue-500 shrink-0 flex flex-col items-center justify-center text-white duration-500",
								input ? "opacity-100" : "opacity-0"
							)}
							type="submit"
						>
							<BiSearchAlt className="w-8 h-8" />
						</button>
					</form>
				</div>
			</section>
		</main>
  );
}
