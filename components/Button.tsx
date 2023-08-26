"use client";
import React from 'react'
import Image from 'next/image'
import { ButtonProps } from '@/types';



const Button = ({ title, ContainerStyles, textStyles, rightIcon, handleClick, btnType, isDisabled }: ButtonProps) => {
    return (
        <button disabled={false} type={btnType || "button"} className={`custom-btn ${ContainerStyles}`} onClick={handleClick}>
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image
                        src={rightIcon}
                        alt="right-icon"
                        fill
                        className='object-contain'
                    />
                </div>
            )}
        </button>
    )
}

export default Button