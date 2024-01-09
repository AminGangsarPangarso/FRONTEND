import { useEffect, useMemo, useState } from 'react'
import productService from '@/services/product.service'
import { toastError } from '@/utils/toast'
import { IMAGE_BASE_URL } from '@/constants'
import ProductCard from '@/Components/Card/ProductCard'

function ProductSection() {
  const [rawProducts, setRawproducts] = useState([])

  useEffect(() => {
    productService
      .getAll()
      .then((res) => {
        setRawproducts(res?.data || [])
      })
      .catch((err) => {
        toastError(err)
      })
  }, [])

  const products = useMemo(() => {
    return rawProducts.map((val) => ({
      ...val,
      image: `${IMAGE_BASE_URL}${val.image}`,
    }))
  }, [rawProducts])

  return (
    <div className='mb-16 bg-[#fffbeb] py-16 shadow-[0px_0px_100px_rgba(146,63,14,.2)] xl:py-28'>
      <div className='container flex flex-col justify-center space-y-10 lg:space-y-16'>
        <div className='space-y-2 text-center'>
          <h1 className='mx-auto max-w-5xl text-center font-dm-serif text-4xl tracking-wider sm:text-5xl'>
            Product Kita
          </h1>
          <p className='font-raleway'>
            Beberapa Produk unggulan dari Sirup Secang Yang-Ti yang mungkin bisa
            kamu coba
          </p>
        </div>
        <div className='mx-auto flex flex-row flex-wrap justify-center gap-6'>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductSection
