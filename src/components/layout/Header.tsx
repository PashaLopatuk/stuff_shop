import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { SlMagnifier, SlHeart, SlHandbag } from "react-icons/sl";



const Header = () => {
    return (
        <header className='bg-background'>
            <div className="w-screen sm:w-container mx-auto flex justify-between items-center p-5 ">
                <Link
                    href='/'
                    className="font-bold font-serif text-2xl text-foreground hover:text-background hover:bg-primary transition-colors cursor-pointer"
                >
                    Store
                </Link>
                <nav className="">
                    <ul className="flex gap-10">
                        <li className="">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="">
                            <Link href="/products">Shop</Link>
                        </li>
                        <li className="">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-5">
                    <Link href='/'>
                        <SlMagnifier className='w-5 h-5' />
                    </Link>
                    <Link href={'/'}>
                        <SlHeart className='w-5 h-5' />
                    </Link>
                    <Link href={'/'}>
                        <SlHandbag className='w-5 h-5' />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header