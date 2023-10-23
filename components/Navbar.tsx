import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Special_Elite, IBM_Plex_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});
export default function Navbar() {
  return (
    <header className="relative ">
      <nav aria-label="Top" className="container">
        <div className="border-b border-gray-200">
          <div className="flex items-center justify-center py-4 ">
            {/* Logo */}
            <Link href="/" className="flex">
              <span className="sr-only">Warcrimes.fyi</span>
              <h1
                className={cn(
                  " text-xl md:text-4xl font-bold text-primary -mb-1",
                  font.className
                )}
              >
                {"warcrimes.fyi"}
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
