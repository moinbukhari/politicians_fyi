"use client";
import { IBM_Plex_Mono } from "next/font/google";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
import MobileFiltersMenu from "./MobileFiltersMenu";

const sortOptions = [
  { name: "Most Votes", href: "#", current: true },
  { name: "Most Hawkish", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "party",
    name: "Party Affiliation",
    options: [
      { value: "conservative", label: "Conservative", checked: true },
      { value: "labour", label: "Labour", checked: true },
      {
        value: "liberal_democrats",
        label: "Liberal Democrats",
        checked: true,
      },
      { value: "snp", label: "Scottish National Party", checked: true },
      { value: "green", label: "Green", checked: true },
      { value: "ukip", label: "UK Independence Party", checked: true },
      { value: "bnp", label: "British National Party", checked: true },
    ],
  },
  //   {
  //     id: "category",
  //     name: "Category",
  //     options: [
  //       { value: "new-arrivals", label: "New Arrivals", checked: false },
  //       { value: "sale", label: "Sale", checked: false },
  //       { value: "travel", label: "Travel", checked: true },
  //       { value: "organization", label: "Organization", checked: false },
  //       { value: "accessories", label: "Accessories", checked: false },
  //     ],
  //   },
  //   {
  //     id: "size",
  //     name: "Size",
  //     options: [
  //       { value: "2l", label: "2L", checked: false },
  //       { value: "6l", label: "6L", checked: false },
  //       { value: "12l", label: "12L", checked: false },
  //       { value: "18l", label: "18L", checked: false },
  //       { value: "20l", label: "20L", checked: false },
  //       { value: "40l", label: "40L", checked: true },
  //     ],
  //   },
];

const font = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Dashboard({ children }) {
  return (
    <>
      <div className="font-mono flex flex-col h-full">
        <div className="flex flex-col md:flex-row items-end justify-between border-b border-gray-200 pb-6 pt-4">
          <div className="flex flex-col ">
            <h1
              className={cn(
                "text-center md:text-left text-3xl md:text-4xl font-bold text-primary -mb-1",
                font.className
              )}
            >
              {"unclassified.fyi"}
            </h1>
            <h2 className="text-sm font-mono mt-2">
              Your guide to political transparency.
            </h2>
          </div>

          <div className="mt-2 md:mt-0 flex items-baseline space-x-4">
            <div>
              <label
                htmlFor="search"
                className="block sr-only text-sm font-medium leading-6 text-gray-900"
              >
                Quick search
              </label>
              <div className="relative mt-2 flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full md:w-96 rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Search by party, constituency or MP"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5 text-gray-400">
                  <MagnifyingGlassIcon />
                </div>
              </div>
            </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={cn(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <MobileFiltersMenu />
          </div>
        </div>

        <section
          aria-labelledby="Politicians-heading"
          className="py-6 border-r border-gray-200 "
        >
          <h2 className="sr-only">Politicians</h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5 ">
            {/* Filters */}
            <form className="hidden lg:block border-r border-gray-200 pr-2">
              <h3 className="sr-only">Categories</h3>
              {filters.map((section) => (
                <div className="border-b border-gray-200 py-6" key={section.id}>
                  <h3>{section.name}</h3>
                  <div className="space-y-4 pt-4 pl-2">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </form>

            {/* content grid */}
            <div className="lg:col-span-4">{children}</div>
          </div>
        </section>
      </div>
    </>
  );
}
