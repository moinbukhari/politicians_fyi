import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <main>
        <div className="flex flex-col items-center justify-between">
            <Card className="w-[100%]">
                <table>
                    <tr>
                        <td>
                            {/* TODO - Need to resize the pic to be appropriate */}
                            <img src="https://members-api.parliament.uk/api/Members/4514/Thumbnail" className="w-[70%%], .p-4"></img>
                        </td>
                        <td>
                            <CardHeader>
                                <CardTitle className="pb-4">Kier Starmer</CardTitle>
                                <CardDescription>Constituency - Holborn and St Pancreas</CardDescription>
                                <CardDescription>Party - Labour</CardDescription>
                            </CardHeader>
                        </td>
                    </tr>
                </table>
            </Card>    
        </div>

        {/* Show what bills they have voted for (Yes - Green, No - Red, Abstain - Grey) */}
        <div className="flex items-center justify-between">
            <Card className="w-[20]" >
                <CardHeader>
                    <CardTitle className="pb-4">Motion - Tax the rich?</CardTitle>
                    <CardDescription>Answer - Abstain</CardDescription>
                </CardHeader>
            </Card>
            <Card className="w-[20]">
                <CardHeader>
                    <CardTitle className="pb-4">Motion - Bun Jeremy Corbyn?</CardTitle>
                    <CardDescription>Answer - Yes</CardDescription>
                </CardHeader>
            </Card>
            <Card className="w-[20]">
                <CardHeader>
                    <CardTitle className="pb-4">Motion - Am I the worst?</CardTitle>
                    <CardDescription>Answer - No</CardDescription>
                </CardHeader>
            </Card>
        </div>

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
