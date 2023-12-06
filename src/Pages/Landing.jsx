import CarouselContentSection from '@/Components/Sections/CarouselContent'
import FaqSection from '@/Components/Sections/Faq'
import ManfaatSection from '@/Components/Sections/Manfaat'
import ProductSection from '@/Components/Sections/Product'
import TestimoniSliderSection from '@/Components/Sections/TestimoniSlider'
import UseProduct from '@/Components/useProduct'
import getAllLandingService from '@/service/detaillanding/getAll'
import { useEffect, useState } from 'react'

function Landing() {
  const [data, setData] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllLandingService()
      .then((res) => {
        setData(res)
      })
      .catch((err) => setError(err))
  }, [])
  return (
    <>
      <CarouselContentSection />
      <ManfaatSection />
      <UseProduct />
      <ProductSection products={data?.data} />
      <TestimoniSliderSection />
      <FaqSection />
    </>
  )
}

export default Landing
