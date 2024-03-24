import ProductsApiManager from '@/api/managers/ProductsApiManager'
import ProductCard from '@/components/products/ProductCard'
import { ProductFilters } from '@/entities/products'
import Link from 'next/link'
import React from 'react'

const ProductsList = async ({ searchParams }: { searchParams: object }) => {
    const response = await ProductsApiManager.searchProducts(searchParams as ProductFilters)

    if (response && 'data' in response) {
        return (
            <ul className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-5 w-[fit-content] mx-auto">
                {
                    response.data.map(product => (
                        <li key={product.id}>
                            <Link href={'/products/' + product.id}>
                                <ProductCard product={product} />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
    if (response && (
        ('data' in response
            && Array.isArray(response.data)
            && !response.data.length
        ) || (response.isAxiosError)
    )) {
        return (
            <div className="text-center font-semibold text-secondary-foreground">No such products</div>
        )
    }
}

export default ProductsList