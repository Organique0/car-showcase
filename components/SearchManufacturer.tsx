"use client";
import { SearchManufacturerProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useState } from "react";
import Image from 'next/image';
import { manufacturers } from '@/constants';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';


const SearchManufacturer = ({ manufa, setManufa }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufa =
        query === ""
            ? manufacturers
            : manufacturers.filter(item => (
                item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
            ));
    return (
        <div className='search-manufacturer'>
            <Combobox value={manufa} onChange={setManufa}>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg" width={20} height={20} className='ml-4' alt='car logo' />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder='Tesla'
                        displayValue={(manufa: string) => (
                            manufa
                        )}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </Combobox.Button>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="search-manufacturer__option">
                            {
                                filteredManufa.map((manufa: string) => (
                                    <Combobox.Option
                                        key={manufa}
                                        className={({ active }) => (
                                            `search-manufacturer__option 
                                            ${active
                                                ? 'bg-primary-blue text-white'
                                                : 'text-gray-900'
                                            }
                                            `
                                        )}
                                        value={manufa}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`
                                                    block truncate 
                                                    ${selected ? 'font-medium' : 'font-normal'}
                                                    `}
                                                >
                                                    {manufa}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`
                                                        absolute inset-y-0 left-0 flex items-center pl-3 
                                                        ${active ? 'text-white' : 'text-teal-600'}
                                                        `}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer