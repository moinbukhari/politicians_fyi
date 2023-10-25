import ProfileQuotes from "@/components/profile-quotes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import WriteButton from "@/components/write/WriteButton";

interface IProfilePageProps {
  params: {
    id: number;
  };
}

export default function Page(props: IProfilePageProps) {
  const { params } = props;
  const party = "Labour";

  return (
    <main className="w-full min-h-screen flex justify-center ">
      <div className=" py-4 flex flex-col gap-10 px-8  justify-center items-center max-w-4xl">
        <section className="flex w-full max-w-4xl mx-auto items-start gap-6  ">
          <Image
            src="/assets/keir_profile.jpg"
            alt="profile pic of keir"
            className="rounded-lg"
            width={200}
            height={200}
          />
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-bold ">Keir Starmer MP</p>
            <div className="flex gap-2 ">
              <p>Holborn & St Pancras</p>
              <Badge
                variant={"outline"}
                className={`rounded-sm w-max h-6 ${
                  party === "Labour"
                    ? "bg-red-200 text-red-500"
                    : " bg-blue-200 text-blue-500"
                }`}
              >
                {party}
              </Badge>
              {/* <p
                    className={`py-1 px-1 w-max rounded-sm  ${
                      party === "Lab"
                        ? "bg-red-200 text-red-500"
                        : " bg-blue-200 text-blue-500"
                    }`}
                  >
                    Labour
                  </p> */}
            </div>
            <div className="flex gap-2 justify-between items-start w-[60%]">
              <div className="flex flex-col text-center justify-center items-center">
                <div className="text-xl font-bold">1</div>
                <div className="text-sm">Votes</div>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <div className="text-xl font-bold">1</div>
                <div className="text-sm">Affiliations & Finances</div>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <div className="text-xl font-bold">1</div>
                <div className="text-sm">Quotes</div>
              </div>
            </div>
          </div>

          <Image
            src="/assets/parliment.png"
            alt="parliment logo"
            className="rounded-md"
            width={100}
            height={100}
          />
        </section>

        <section className="flex flex-col gap-4 relative pb-10">
          <div className="flex justify-between w-full gap-4">
            <div className="flex flex-col ">
              <div className="font-bold text-4xl">Votes</div>
              <div className="text-slate-500">
                Personal record voting in the UK parliment
              </div>
            </div>
            <WriteButton />
          </div>
          <div className="flex gap-6 flex-wrap sm:flex-nowrap">
            <Card className="w-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  This is where the legislation bill question is going to be
                  added
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <p className="font-semibold text-lg text-green-600 uppercase">
                  For
                </p>
                <p>{"->"}</p>
              </CardFooter>
            </Card>
            <Card className="w-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  Personal Record Voting in the UK Parliment
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <p className="font-semibold text-lg text-red-600 uppercase">
                  Against
                </p>
                <p>{"->"}</p>
              </CardFooter>
            </Card>
            <Card className="w-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>
                  This is where the legislation bill question is going to be
                  added
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <p className="font-semibold text-lg text-orange-600 uppercase">
                  Abstained
                </p>
                <p>{"->"}</p>
              </CardFooter>
            </Card>
          </div>
          <Link
            className="absolute bottom-0 right-0 underline underline-offset-4 text-blue-600 hover:text-blue-800 "
            href={""}
          >
            See more
          </Link>
        </section>

        <section className="flex flex-col gap-4 relative pb-10">
          <div className="flex justify-between w-full gap-4">
            <div className="flex flex-col ">
              <div className="font-bold text-4xl">Quotes</div>
              <div className="text-slate-500">
                Personal record voting in the UK parliment
              </div>
            </div>
            <WriteButton />
          </div>
          <ProfileQuotes />
          <Link
            className="absolute bottom-0 right-0 underline underline-offset-4 text-blue-600 hover:text-blue-800 "
            href={""}
          >
            See more
          </Link>
        </section>
      </div>
    </main>
  );
}
