import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import classNames from "classnames";

interface IHomepageCardProps {
    politician: any;
}

export default function HomepageCard(props: IHomepageCardProps) {
    const { politician } = props;
    const router = useRouter();

    const handleClick = () => {
        router.push(`/profile/${politician.id}`);
    };

    return (
        <Card
            onClick={handleClick}
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
                <figure className="overflow-hidden aspect-[8/10]">
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
            <CardFooter className="flex flex-row justify-end">
                <Button className="w-max bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Write to MP {"->"}
                </Button>
            </CardFooter>
        </Card>
    )
}