"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Politician {
	name: string
	constituency: string
	party: string
	image: string
	vote: number
	affiliationsFinances: number
	parliamentaryQuestions: number
}

const politicians = [
	{
		name: "Keir Starmer MP",
		constituency: "Holborn and St Pancras",
		party: "Labour",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 10,
		affiliationsFinances: 4,
		parliamentaryQuestions: 3,
	},
	{
		name: "Boris Johnson MP",
		constituency: "Uxbridge and South Ruislip",
		party: "Conservative",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/640px-Boris_Johnson_official_portrait_%28cropped%29.jpg",
		vote: 15,
		affiliationsFinances: 6,
		parliamentaryQuestions: 5,
	},
	{
		name: "Rishi Sunak MP",
		constituency: "Richmond",
		party: "Conservative",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/a/ab/Portrait_of_Prime_Minister_Rishi_Sunak_%28cropped%29.jpg",
		vote: 9,
		affiliationsFinances: 10,
		parliamentaryQuestions: 4,
	},
	{
		name: "Angela Rayner MP",
		constituency: "Ashton-under-Lyne",
		party: "Labour",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/e/e6/Official_portrait_of_Angela_Rayner_MP_crop_2.jpg",
		vote: 8,
		affiliationsFinances: 6,
		parliamentaryQuestions: 5,
	},
	{
		name: "Penny Mordaunt MP",
		constituency: "Portsmouth North",
		party: "Conservative",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "Darren Jones MP",
		constituency: "Bristol North West",
		party: "Labour",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "Ed Miliband MP",
		constituency: "Doncaster North",
		party: "Labour",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "Suella Braverman MP",
		constituency: "Fareham",
		party: "Conservative",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "Lisa Nandy MP",
		constituency: "Wigan",
		party: "Labour",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "Michael Gove MP",
		constituency: "Surrey Heath",
		party: "Conservative",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "Wes Streeting MP",
		constituency: "Ilford North",
		party: "Labour",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "Grant Shapps MP",
		constituency: "Welwyn Hatfield",
		party: "Conservative",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "David Lammy MP",
		constituency: "Tottenham",
		party: "Labour",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "Oliver Dowden MP",
		constituency: "Hertsmere",
		party: "Conservative",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "Rachel Reeves MP",
		constituency: "Leeds West",
		party: "Labour",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
	{
		name: "James Cleverly MP",
		constituency: "Braintree",
		party: "Conservative",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/62/Official_portrait_of_Keir_Starmer_crop_2.jpg",
		vote: 1,
		affiliationsFinances: 1,
		parliamentaryQuestions: 1,
	},
]

export default function Home() {
	const router = useRouter()
	const [input, setInput] = useState("")
	const [filteredPoliticians, setFilteredPoliticians] =
		useState<Politician[]>(politicians)

	const handleFilter = () => {
		const inputValue = input.toLowerCase()
		const filtered = politicians.filter((politician) => {
			return (
				politician.name.toLowerCase().includes(inputValue) ||
				politician.constituency.toLowerCase().includes(inputValue) ||
				politician.party.toLowerCase().includes(inputValue)
			)
		})

		setFilteredPoliticians(filtered)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		handleFilter()
	}

	return (
		<main className="w-full min-h-screen flex flex-col md:pt-20 bg-[#F9F8F6]">
			<div>
				<div className="text-center pb-2">
					<h1 className="text-4xl md:text-5xl font-black text-black pb-3">
						What is my MP saying?
					</h1>
					<h3 className="text-base md:text-lg text-666565">
						Find out what UK politicians are saying on issues affecting Palestine.
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
						className={`${
							politician.party === "Labour" ? "border-red-200" : "border-blue-200"
						} hover:shadow-md hover:bg-gray-100 ${
							politician.party === "Labour"
								? "hover:border-red-200"
								: "hover:border-blue-200"
						} transition duration-300`}
					>
						<CardHeader>
							<CardTitle>{politician.name}</CardTitle>
							<CardDescription>{politician.constituency}</CardDescription>
							<CardDescription
								className={`rounded-sm w-max ${
									politician.party === "Labour"
										? "bg-red-200 text-red-500"
										: " bg-blue-200 text-blue-500"
								}`}
							>
								{politician.party}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<img src={politician.image} />
						</CardContent>
						<CardFooter className="flex flex-col justify-center">
							<div className="flex gap-2 justify-between items-start w-[60%]">
								<div className="flex flex-col text-center justify-center items-center">
									<div className="text-xl font-bold">{politician.vote}</div>
									<div className="text-sm">Votes</div>
								</div>
								<div className="flex flex-col text-center justify-center items-center">
									<div className="text-xl font-bold">{politician.affiliationsFinances}</div>
									<div className="text-sm">Affiliations & Finances</div>
								</div>
								<div className="flex flex-col text-center justify-center items-center">
									<div className="text-xl font-bold">{politician.parliamentaryQuestions}</div>
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
	)
}
