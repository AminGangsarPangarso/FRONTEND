import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'
import { IMAGE_BASE_URL } from '@/constants'
import rupiah from '@/utils/rupiah'

function ProductSection({ products }) {
  useEffect(() => {
    // console.log(products)
  }, [])
  return (
    <Element name='/product' className='element'>
      <div className=' container mt-20 h-full w-full bg-white '>
        <div className='title_product flex w-full flex-col justify-center text-center '>
          <h1 className='mb-5 text-2xl font-extrabold  sm:text-4xl lg:text-4xl'>
            Product Kita
          </h1>
          <p className='mb-6'>
            Beberapa Produk unggulan dari Sirup Secang Yang-Ti yang mungkin bisa
            kamu coba
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <div className='mt-8 grid grid-cols-1 gap-2 rounded-lg md:grid-cols-4 lg:grid-cols-4  '>
            {products &&
              products?.map((item) => {
                return (
                  <div
                    key={item.product_id}
                    className='card_product group/item mb-8 cursor-pointer gap-4 rounded-lg border-2  hover:bg-slate-100   '
                  >
                    <div className='mb-8 flex w-full flex-col items-center justify-center px-4 py-2 text-center  '>
                      {/* <img
                        className='h-72 w-full rounded-md bg-cover'
                        src={IMAGE_BASE_URL + item.galery[0].img_url}
                        alt={item.product_name}

                      /> */}
                      {item.galery?.length > 0 ? (
                        <img
                          className='h-72 w-full rounded-md bg-cover'
                          src={IMAGE_BASE_URL + item.galery[0].img_url}
                          alt={item.product_name}
                        />
                      ) : (
                        <h1>tidak ad gambar </h1>
                      )}
                      <h1 className='mb-4 mt-4 line-clamp-3 overflow-hidden whitespace-normal font-dm-serif text-lg '>
                        {item.product_name}
                      </h1>
                      <div className='mb-4 w-full '>
                        <p className='line-clamp-3 '>
                          {item.product_description}
                        </p>
                      </div>
                      <div className='price mb-4'>
                        <h4 className='font-md text-xl font-extrabold text-amber-600'>
                          {rupiah(item.product_price)}
                        </h4>
                      </div>

                      <div className='tombol rounded-full py-1 hover:bg-amber-700'>
                        <Link
                          to={`detail/${item.product_id}`}
                          className='px-8   text-white '
                        >
                          Beli
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default ProductSection
