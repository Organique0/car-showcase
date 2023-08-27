"use client";
import React, { useState } from 'react'
import { SearchManufacturer } from '.';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SearcBarProps } from '@/types';

const SearchButton = ({ classes }: { classes: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${classes}`}>
        <Image
            src="/magnifying-glass.svg"
            alt='magnifying glass'
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
);

const SearchBar = ({ setManufacturer, setModel }: SearcBarProps) => {
    const [SearchManufa, setSearchManufa] = useState('');
    const [SearchModel, setSearchModel] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (SearchManufa === '' && SearchModel === '') {
            return alert('Please enter a manufacturer or model');
        }

        setModel(SearchModel);
        setManufacturer(SearchManufa);
    }

    return (
        <form action="" className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer selected={SearchManufa} setSelected={setSearchManufa} />
                <SearchButton classes="sm:hidden" />
            </div>
            <div className='searchbar__item'>
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                    alt='car model'
                />
                <input
                    type="text"
                    name='model'
                    value={SearchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder='Tiguan'
                    className='searchbar__input'
                />
                <SearchButton classes="sm:hidden" />
            </div>
            <SearchButton classes="max-sm:hidden" />
        </form>
    )
}

export default SearchBar