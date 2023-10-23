import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

interface IQuoteItemProps {
    quote: {
        title: string;
        date: string;
        source: string;
        type: string;
    };
}

export default function QuoteItem(props: IQuoteItemProps) {
    const { quote } = props;
    const { title, date, source, type } = quote;
    return (
        <Card className="w-full flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="text-md">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <p className="font-normal text-sm text-slate-600 ">
                    {date} &middot; {source} &middot; {type}
                </p>
                <p>{"->"}</p>
            </CardFooter>
        </Card>
    )
}