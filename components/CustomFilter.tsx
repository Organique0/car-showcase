"use client";
import { CustomFilterProps } from '@/types'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import { updateSearchParams } from '@/utils';

function CustomFilter<T>({ title, options, setFilter }: CustomFilterProps<T>) {
    const [selected, setSelected] = React.useState(options[0]);

    return (
        <div className='w-fit'>
            <Listbox value={selected} onChange={(e) => { setSelected(e); setFilter(e.value as T) }}>
                <div className='relative w-fit z-10'>
                    <Listbox.Button className='custom-filter__btn'>
                        <span>{selected.title}</span>
                        <Image src="/chevron-up-down.svg" width="16" height="16" alt="chevron-up-down" className='ml-4 object-contain' />
                    </Listbox.Button>
                    <Transition
                        as={React.Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options className='custom-filter__options'>
                            {options.map((option) => (
                                <Listbox.Option key={option.title} value={option}
                                    className={({ active }) =>
                                        `relative 
                                    cursor-default 
                                    selected-none 
                                    py-2 
                                    px-4 
                                    ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                    `}
                                >
                                    {({ selected }) => (
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {option.title}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter