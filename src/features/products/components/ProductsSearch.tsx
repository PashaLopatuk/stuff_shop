'use client';

import { Input } from '@/components/ui/input';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import React, { Ref, useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import debounce from 'debounce';

const ProductsSearch = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSearch = debounce((value: string) => {
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('title', value)
        } else {
            params.delete('title')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 500)

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        const paramValue = params.get('title');
        if (!!inputRef.current && 'value' in inputRef.current && paramValue) {
            inputRef.current.value = paramValue
        }
    })

    return (
        <div className=""

        >
            <Input
                ref={inputRef}
                placeholder='Search'
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
            />
        </div>
    )
}

export default ProductsSearch