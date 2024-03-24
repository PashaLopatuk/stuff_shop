'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { SlEqualizer } from 'react-icons/sl';

const ProductFilters = () => {
    const [isOpen, setIsOpen] = useState(false)
    const searchParams = useSearchParams()
    const [price, setPrice] = useState(0)

    return (
        <div className='flex flex-col gap-5'>
            <div className="">
                <Button
                    variant={isOpen ? 'default' : 'ghost'}
                    onClick={() => setIsOpen(data => !data)}
                >
                    <SlEqualizer />
                </Button>
            </div>
            {isOpen && (
                <div
                    className="bg-primary min-w-[15rem] p-5 mr-5 transition-all duration-1000"
                >
                    <div className="text-primary-foreground flex items-center">
                        <div className=''>Price: </div>
                        <Input />
                    </div>
                </div>
            )}
        </div>
    )

}

export default ProductFilters