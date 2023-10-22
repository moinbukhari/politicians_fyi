"use client";

import { PieChart } from "react-minimal-pie-chart";

interface IVoteItemProps {
    title: string;
    value: string;
    data?: any[];
}

export default function VoteItem(props: IVoteItemProps) {
    const { title, value, data } = props;

    return (
        <div className="border rounded-md bg-gray-100 p-3 flex flex-col w-f">
                        <p className="text-xs font-semibold mb-6">{title}</p>
                        <div className="w-full grid grid-cols-2 gap-2">
                            <p className="font-bold text-6xl">
                                {value}
                            </p>
                            <div className="w-[50%] bg-gray-200">
                                <PieChart
                                    data={[
                                        { title: 'For', value: 10, color: '#E38627' },
                                        { title: 'Against', value: 15, color: '#C13C37' },
                                    ]}
                                    radius={40}
                                />
                            </div>
                        </div>
                    </div>
    )
}