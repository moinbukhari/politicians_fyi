import QuoteItem from "./quote-item";

const _quotes = [
    {
        title: "This is where the legislation bill question is going to be added.",
        date: "March 2023",
        source: "The Independent",
        type: "Article"
    },
    {
        title: "This is where the legislation bill question is going to be added.",
        date: "March 2023",
        source: "The Independent",
        type: "Article"
    },
    {
        title: "This is where the legislation bill question is going to be added.",
        date: "March 2023",
        source: "The Independent",
        type: "Article"
    }
]

interface IProfileQuotesProps {
    quotes?: Array<{
        title: string;
        date: string;
        source: string;
        type: string;
    }>;
}

export default function ProfileQuotes(props: IProfileQuotesProps) {
    const { quotes = _quotes } = props;
    return (
        <div className="flex gap-6 flex-wrap">
            {quotes.map((quote, index) => (
                <QuoteItem
                    key={index}
                    quote={quote}
                />
            ))}
        </div>
    )
}