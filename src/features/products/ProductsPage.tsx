import React, { Suspense } from 'react'
import ProductsList from './components/ProductsList'
import ProductsSearch from './components/ProductsSearch'
import ProductFilters from './components/ProductFilters'

const ProductsPage = ({ searchParams }: { searchParams: object }) => {

    return (
        <div className='py-5 flex'>
            {/* <div className="">
                <Suspense>
                    <ProductFilters />
                </Suspense>
            </div> */}
            <div className="flex flex-col gap-5">
                <div className="max-w-[25rem] gap-5 items-center">
                    <Suspense>
                        <ProductsSearch />
                    </Suspense>
                </div>
                <ProductsList {...{ searchParams }} />
            </div>
        </div>
    )
}

export default ProductsPage