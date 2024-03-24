import CategoriesApiManager from '@/api/managers/CategoriesApiManager'
import CategoryCard from '@/components/categories/CategoryCard'
import Link from 'next/link'
import React from 'react'

const CategoriesPage = async () => {
    const { data: categories } = await CategoriesApiManager.getCategories({ limit: 100 })

    return (
        <div className=''>
            <ul className="grid grid-cols-3 gap-5">
                {
                    categories.map(category => (
                        <li
                            key={category.id}
                        //categoryId
                        >
                            <Link href={'/products?categoryId='+category.id}>
                                <CategoryCard category={category} />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategoriesPage