import { useState } from 'react'
import { Element } from 'react-scroll'
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
import { RxDotFilled } from 'react-icons/rx'
import frame2 from '@/assets/Image/frame2.jpg'
import frame4 from '@/assets/Image/frame4.jpg'
import frame5 from '@/assets/Image/frame5.png'

function CarouselContentSection() {
  const slides = [{ image: frame2 }, { image: frame4 }, { image: frame5 }]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <Element name='/about' className='element'>
      <div
        className='slides flex h-screen w-full flex-col items-center justify-center text-center  '
        id='about'
      >
        <div className='w-1/2  '>
          <h1 className='font-dm-serif text-2xl text-black md:text-4xl'>
            Tentang Yang-Ti
          </h1>
          <p className='font-raleway  mt-6  md:text-2xl'>
            Yang-Ti adalah produsen dan distributor minuman rempah khas Jogja
            yang turut serta dalam melestarikan budaya dan tradisi dengan
            menyediakan produk minum wedang rempah kekinian.
          </p>

          <div className='h-[200px] w-[200px]  min-w-full rounded-md sm:h-[350px]  sm:w-full'>
            <div className='group relative m-auto mt-10 h-full w-full px-4 '>
              <div
                className='h-full w-full rounded-lg bg-cover bg-center '
                style={{
                  backgroundImage: `url(${slides[currentIndex].image})`,
                }}
              />

              <div className='absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-white/40 p-2 text-2xl group-hover:block md:block  lg:block '>
                <AiOutlineDoubleLeft onClick={prevSlide} />
              </div>

              <div className='absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-white/40 p-2 text-2xl group-hover:block md:block  lg:block'>
                <AiOutlineDoubleRight onClick={nextSlide} />
              </div>
            </div>
          </div>
        </div>
        <div className='top-4 flex justify-center py-2'>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              aria-hidden='true'
              onClick={() => goToSlide(idx)}
              className='cursor-pointer text-2xl'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default CarouselContentSection
