import CategoriesApiManager from '@/api/managers/CategoriesApiManager'
import CategoryCard from '@/components/categories/CategoryCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SectionCategories = async () => {
    const { data: categories } = await CategoriesApiManager.getCategories({ limit: 3 })

    return (
        <section>
            <div className="flex flex-col items-center">
                <div className="p-5">
                    <h2 className='text-xl font-bold text-center text-secondary-foreground'>Browse The Range</h2>
                    <h4 className='font-light text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                </div>
            </div>
            <ul className="flex justify-center gap-5">
                {
                    categories.slice(0, 3).map(category => (
                        <li className="" key={category.id}>
                            <Link
                                href={'/products?categoryId=' + category.id}
                                className=""
                            >
                                <CategoryCard category={category} />
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="flex justify-center">
                <Link
                    href='/categories'
                    className='border-2 border-primary px-[3rem] py-2 text-primary font-medium'
                >Show more</Link>
            </div>
        </section>
    )
}

export default SectionCategories