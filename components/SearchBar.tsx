"use client";
import React, { useState } from 'react'
import { SearchManufacturer } from '.';

const SearchBar = () => {
    const [manufa, setManufa] = useState('');
    const handleSearch = () => {

    }
    return (
        <form action="" className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer manufa={manufa} setManufa={setManufa} />
            </div>
        </form>
    )
}

export default SearchBar