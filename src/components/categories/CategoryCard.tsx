import { Category } from '@/entities/categories'
import Image from 'next/image'
import React, { FC } from 'react'

const CategoryCard: FC<{ category: Category }> = ({ category }) => {
    return (
        <div className='flex flex-col gap-2 items-center transition-colors rounded-xl'>
            <div className="w-[20rem] h-[30rem] overflow-hidden rounded-xl transition-all duration-500">
                <img
                    src={category.image}
                    alt={category.name}
                    width={2000}
                    height={2000}
                    className='object-cover rounded-lg w-[20rem] h-[30rem] hover:scale-110 transition-all duration-500'
                />
            </div>
            <div className="p-2">
                <h3 className='font-medium'>{category.name}</h3>
            </div>
        </div>
    )
}

export default CategoryCard