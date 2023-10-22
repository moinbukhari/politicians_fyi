import VoteItem from "@/components/vote-item"
import Image from "next/image"
export default function Home() {
    return (
        <main className="w-full">
            <div className="w-full h-64 bg-red-500" />
            <section className="flex flex-col w-full max-w-6xl mx-auto items-center justify-between -mt-28">
                <div className="w-full flex flex-row justify-center">
                    <figure className="w-52 h-52 rounded-full border-4 border-white overflow-hidden relative">
                        {// eslint-disable-next-line @next/next/no-img-element
                        <img src="https://members-api.parliament.uk/api/Members/4514/Thumbnail" className="w-[70%%], .p-4" alt="profile"></img>
                        }
                    </figure>
                </div>
                <div className="w-lg mx-auto flex flex-col items-center gap-1 text-2xl">
                    <p className="text-center font-medium">
                        Kier Starmer, <span className="text-red-500 font-normal">Labour</span>
                    </p>
                    <p className="text-center text-lg text-gray-500">
                        £15,000,000 in total donations
                    </p>
                </div>
            </section>

            <section className="w-full max-w-6xl mx-auto mt-8 flex flex-col">
                <p className="font-semibold text-4xl mb-2">
                    Voting History
                </p>
                <div className="w-full grid grid-cols-4 gap-10">
                    <VoteItem
                        title="Votes against Palestine"
                        value="24"
                    />
                    <VoteItem
                        title="Publicly supported occupation"
                        value="17"
                    />
                    <VoteItem
                        title="Praised Israel"
                        value="43"
                    />
                    <VoteItem
                        title="Islamaphobic comments"
                        value="23K"
                    />
                    <VoteItem
                        title="Appeared publicly with Israeli flag"
                        value="1.2K"
                    />
                </div>
            </section>

            <section className="w-full max-w-6xl mx-auto mt-8 flex flex-col mt-20">
                <p className="font-semibold text-4xl mb-2">
                    Affiliations
                </p>
                <div className="w-full grid grid-cols-3 gap-10">
                    <div className="border rounded-md bg-gray-50 p-3 flex flex-col">
                        Friend of Israel
                    </div>
                    <div className="border rounded-md bg-gray-50 p-3 flex flex-col">
                        New Labour Party
                    </div>
                </div>
            </section>

            <div className="justify-left">
                <h2>Finance/Affiliations</h2>
                <ul>
                    <li>Labour Friends of Israel</li>
                    <li>etc</li>
                </ul>
                <h2>Socials</h2>
                <h2>Votes</h2>
                <h2>Contact</h2>
            </div>
            {/* <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Framework</Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Next.js</SelectItem>
                                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                    <SelectItem value="astro">Astro</SelectItem>
                                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                     </div>
                </form>
            </CardContent> */}
            {/* <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter> */}
        </main>
    )
}
