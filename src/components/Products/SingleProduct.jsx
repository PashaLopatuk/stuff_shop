import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { ROUTES } from '../../utils/routes'
import Product from './Product'

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })
  console.log(data)



  useEffect(() => {
    if (!isLoading && !isFetching && !isSuccess) {
      // error case
      navigate(ROUTES.HOME)
    }
  }, [isLoading, isFetching, isSuccess])
  return (
    ! data ? (
      <section className='preloader'>Loading</section>
    ) : (
      <>
        <Product {...data} />
      </>
    )
  )
}

export default SingleProduct
