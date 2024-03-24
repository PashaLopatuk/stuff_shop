import ProductsApiManager from '@/api/managers/ProductsApiManager'

import React from 'react'

const SingleProductPage = async ({ params }: { params: { id: string } }) => {

  const response = await ProductsApiManager.getProduct({ id: params.id })
  const product = (response && 'data' in response ) ? response.data : undefined
  console.log(product?.images[0].slice(2).slice(0, -2))
  console.log(product)

  return (
    <div className='p-5'>
      <div className="flex">
        <img src={product?.images[0].slice(2).slice(0, -2)} />
      </div>
    </div>
  )
}

export default SingleProductPage