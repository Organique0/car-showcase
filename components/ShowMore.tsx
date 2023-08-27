"use client";
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '.';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    const showMoreButtonClicked = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);
    }

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                <Button
                    title='Show more'
                    btnType='button'
                    ContainerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={showMoreButtonClicked}
                />
            )}
        </div>
    )
}

export default ShowMore