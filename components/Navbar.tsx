"use client";

import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import {Manrope} from "next/font/google"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


const font = Manrope({
    weight: "600",
    subsets: ["latin"],
});

export const Navbar = () => {
    return(
        <div className="w-full flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-[#F9F8F6] h-16">
            <div className="flex items-center">
                <Link href={"/"}>
                    <h1 className={cn(" text-xl md:text-3xl font-bold text-primary", font.className)}>
                        {"Warcrimes.fyi"}
                    </h1>
                </Link>
            </div>
        </div>
    )
}
