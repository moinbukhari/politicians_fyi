interface IStatsProps {
    politician: any;
}

export default function Stats(props: IStatsProps) {
    const { politician } = props;

    return (
        <div className="w-full grid grid-cols-3 gap-10 relative">
            <StatBox value={politician.vote} label="Votes" />
            <StatBox value={politician.affiliationsFinances} label="Affiliations & Finances" />
            <StatBox value={politician.parliamentaryQuestions} label="Quotes" />
        </div>
    )
}

interface IStatBoxProps {
    label: string;
    value: string;
}

function StatBox(props: IStatBoxProps) {
    const { value, label } = props;

    return (
        <div className="w-full relative">
            <div className="w-full aspect-square flex flex-col justify-start items-center">
                <div className="text-5xl font-bold text-gray-700 h-12">{value}</div>
                <div className="text-xs text-center text-gray-600">{label}</div>
            </div>
        </div>
    )
}