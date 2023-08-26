"use client";
import React from 'react'
import Image from 'next/image'
import { ButtonProps } from '@/types';



const Button = ({ title, styles, handleClick }: ButtonProps) => {
    return (
        <button disabled={false} type={'button'} className={`custom-btn ${styles}`} onClick={handleClick}>
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default Button