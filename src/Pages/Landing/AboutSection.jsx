import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import imgAbout1 from '@/assets/image/about_1.jpg'
import imgAbout2 from '@/assets/image/about_2.jpg'
import imgAbout3 from '@/assets/image/about_3.jpg'
import { cn } from '@/utils/classes'

function AboutSection() {
  const slides = [imgAbout1, imgAbout2, imgAbout3]
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
    <div className='container'>
      <div className='flex flex-col justify-center space-y-10'>
        <div className='space-y-4 text-center'>
          <h1 className='mx-auto max-w-5xl font-dm-serif text-4xl tracking-wider sm:text-5xl'>
            Tentang Yang-Ti
          </h1>
          <p className='mx-auto max-w-3xl font-raleway'>
            Yang-Ti adalah produsen dan distributor minuman rempah khas Jogja
            yang turut serta dalam melestarikan budaya dan tradisi dengan
            menyediakan produk minum wedang rempah kekinian.
          </p>
        </div>
        <div className='flex justify-center'>
          <div className='relative mb-4 h-52 w-full max-w-5xl rounded-md sm:h-80 md:h-[520px]'>
            <div
              className='h-full w-full rounded-lg bg-[#e7c28a] bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `url(${slides[currentIndex]})`,
              }}
            />
            <div className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/50 p-2'>
              <ChevronLeft onClick={prevSlide} />
            </div>
            <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/50 p-2'>
              <ChevronRight onClick={nextSlide} />
            </div>
            <div className='bottom-0 flex justify-center gap-1 py-2'>
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'h-2 w-6 cursor-pointer rounded-full bg-[#e7c28a]',
                    idx === currentIndex && 'bg-[#dca05b]'
                  )}
                  aria-hidden='true'
                  onClick={() => goToSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
