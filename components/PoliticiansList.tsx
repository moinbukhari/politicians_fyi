import { cn } from "@/lib/utils";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

async function getData() {
  const res = await fetch("https://politicians.fly.dev/politicians/");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const party_abbreviations = {
  Lab: "Labour",
  Con: "Conservative",
};

function getPartyColoursByAbbreviation(party: string): [string, string] {
  let bg: string;
  let text: string;

  switch (party) {
    case "Lab":
      return ["red", "red"]
    case "Con":
      return ["blue", "blue"]
    case "Green":
      return ["green", "green"]
    case "LD":
      return ["orange", "orange"]
    case "SNP":
      return ["yellow", "yellow"]
    case "Ind":
      return ["gray", "gray"]
    default:
      return ["gray", "black"]
  }
}

function getPartyColoursByPerson(person: any) {
  const [bg, text] = getPartyColoursByAbbreviation(person.party_abbreviation)

  return `ring-${bg}-600/20 text-${text}-700 bg-${bg}-50`
}


export default async function PoliticiansList() {
  const data = await getData();
  return (
    <div className="overflow-hidden md:pr-6 ">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden"
      >
        {data.splice(0, 12).map((person) => (
          <li
            key={person.member_id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-[#fcfdfa] text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-24 w-24 flex-shrink-0 rounded-full"
                src={person.thumbnail_url}
                alt=""
              />
              <h3 className="mt-6 font-semibold text-sm text-gray-900">
                {person.display_name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">
                  {person.membership_from}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full  px-2 py-1 text-xs font-medium  ring-1 ring-inset ",
                      getPartyColoursByPerson(person)
                    )}
                  >
                    {party_abbreviations[person.party_abbreviation]}
                    {/* {person.role} */}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${person.contact_info.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Email
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`/profile/${person.member_id}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    {/* <PhoneIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    /> */}
                    Full Record
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <nav
        className="flex items-center justify-between border-t border-gray-200  pt-4 -pb-4 mt-4 "
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">20</span> results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Next
          </a>
        </div>
      </nav>
    </div>
  );
}
