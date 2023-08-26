"use client";

import React from 'react'
import Image from "next/image";
import Button from './Button';
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';

export default function Hero() {

    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book, or rent a cart - quicly and easily
                </h1>
                <p className='hero__subtitle'>
                    Streamline your car rental expirience with our effortless booking process
                </p>
                <Button
                    title="explore cars"
                    ContainerStyles="bg-primary-blue rounded-full mt-10"
                    textStyles="text-white font-semibold"
                    handleClick={handleScroll}
                    rightIcon={<ArrowSmallRightIcon color='white' />}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/hero.png" alt='hero' fill className='object-contain' />
                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}
