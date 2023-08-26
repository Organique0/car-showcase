"use client";
import { Car } from '@/types'
import Image from 'next/image'
import { Button } from '.'
import { calculateCarRent } from '@/utils';
import { useState } from 'react';


interface CarCardProps {
    car: Car,
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg, year);

    const [open, setOpen] = useState(false);

    return (
        <div className='car-card group'>
            <div className="car-card__content">
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold gap-1'>
                <span className='self-start text-[14px] font-semibold'>
                    €
                </span>
                <span>{carRent}</span>
                <span className='self-end text-[14px] font-semibold mb-2'>
                    /day
                </span>
            </p>
            <div className='relative w-full h-40 my-3 object-contain'>
                <Image
                    src="/hero.png"
                    alt='car model'
                    fill
                    priority
                    className='object-contain'
                />
            </div>
            <div className='relative flex w-full mt-2'>
                <div className='
                flex 
                group-hover:invisible 
                w-full 
                justify-between 
                text-gray'
                >
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image
                            src="/steering-wheel.svg"
                            alt='steering wheel'
                            width={20}
                            height={20}
                        />
                        <p className='text-[14px]'>
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image
                            src="/tire.svg"
                            alt='tire'
                            width={20}
                            height={20}
                        />
                        <p className='text-[14px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image
                            src="/gas.svg"
                            alt='gas'
                            width={20}
                            height={20}
                        />
                        <p className='text-[14px]'>
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>
                <div className='car-card__btn-container'>
                    <Button
                        title='View more'
                        ContainerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-[14px] text-white font-bold leading-[17px]'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setOpen(true)}
                    />
                </div>
            </div>
        </div>
    )
}

export default CarCard