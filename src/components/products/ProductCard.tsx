import { Product } from '@/entities/products'
import Image from 'next/image'
import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

const ProductCard: FC<{
    product: Product, className?: string,
}> = ({
    product, className
}) => {
        return (
            <div className={twMerge(
                "w-60 h-[22rem] bg-muted",
                className)}>
                <div className="overflow-hidden ">
                    <img
                        src={product.images[0]}
                        width={2000}
                        height={2000}
                        alt=''
                        className='hover:scale-110 transition-all duration-500'
                    />
                </div>
                <div className="p-2">
                    <h4 className='font-semibold line-clamp-1 tracking-wide'>{product.title}</h4>
                    <p className="text-ellipsis line-clamp-1 text-muted-foreground">{product.description}</p>
                    <div className="">USD {product.price}.00</div>
                </div>

            </div>
        )
    }

export default ProductCard