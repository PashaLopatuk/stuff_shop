import ProductsApiManager from '@/api/managers/ProductsApiManager'
import ProductCard from '@/components/products/ProductCard'
import Link from 'next/link'
import React from 'react'

const SectionProducts = async () => {
    const { data: products } = await ProductsApiManager.getProducts({ limit: 8 })

    return (
        <section className='flex flex-col gap-5'>
            <h2 className='text-secondary-foreground text-center text-2xl font-semibold'>Our Products</h2>
            <ul className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-5 w-[fit-content] mx-auto">
                {
                    products.slice(0, 8).map(product => (
                        <li className="w-[fit-content]" key={product.id}>
                            <Link href={'/products/' + product.id}>
                                <ProductCard product={product} />
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="flex justify-center">
                <Link
                    href='/products'
                    className='border-2 border-primary px-[3rem] py-2 text-primary font-medium'
                >Show more</Link>
            </div>
        </section>
    )
}

export default SectionProducts