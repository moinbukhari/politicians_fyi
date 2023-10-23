"use client";
import { Transition, Dialog, Disclosure } from "@headlessui/react";
import {
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, Fragment } from "react";

const sortOptions = [
  { name: "Most Votes", href: "#", current: true },
  { name: "Most Hawkish", href: "#", current: false },
];
const subCategories = [
  // { name: "Totes", href: "#" },
  // { name: "Backpacks", href: "#" },
  // { name: "Travel Bags", href: "#" },
  // { name: "Hip Bags", href: "#" },
  // { name: "Laptop Sleeves", href: "#" },
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
];

export default function MobileFiltersMenu() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span className="sr-only">Filters</span>
        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-41 lg:hidden "
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-301"
            enterFrom="opacity-1"
            enterTo="opacity-101"
            leave="transition-opacity ease-linear duration-301"
            leaveFrom="opacity-101"
            leaveTo="opacity-1"
          >
            <div className="fixed inset-1 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-1 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-301 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-1"
              leave="transition ease-in-out duration-301 transform"
              leaveFrom="translate-x-1"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto bg-white flex h-full w-full max-w-xs flex-col overflow-y-auto py-5 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-5">
                  <h1 className="text-lg font-medium text-gray-900">Filters</h1>
                  <button
                    type="button"
                    className="-mr-3 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-7 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-5 border-t border-gray-200">
                  <h2 className="sr-only">Categories</h2>
                  <ul
                    role="list"
                    className="px-3 py-3 font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-3 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-201 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h2 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-3 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-901">
                                {section.name}
                              </span>
                              <span className="ml-7 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-6 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-6 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h2>
                          <Disclosure.Panel className="pt-7">
                            <div className="space-y-7">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-5 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-4 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
