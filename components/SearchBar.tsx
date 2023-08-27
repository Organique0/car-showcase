"use client";
import React, { useState } from 'react'
import { SearchManufacturer } from '.';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

const SearchBar = () => {
    const [manufa, setManufa] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufa === '' && model === '') {
            return alert('Please enter a manufacturer and model');
        }

        updateSearchParams(manufa.toLowerCase(), model.toLowerCase());
    }

    const updateSearchParams = (manufa: string, model: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (manufa) {
            searchParams.set('manufa', manufa);
        } else {
            searchParams.delete('manufa');
        }
        if (model) {
            searchParams.set('model', model);
        } else {
            searchParams.delete('model');
        }


        const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathName);
    }
    return (
        <form action="" className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer manufa={manufa} setManufa={setManufa} />
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
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
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