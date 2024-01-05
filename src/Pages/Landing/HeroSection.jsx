import { Link } from 'react-scroll'
import bgImage from '@/assets/image/bg_hero_section.jpg'

function HeroSection() {
  return (
    <div
      className='mx-auto flex h-full min-h-screen w-full items-center justify-center bg-amber-950 bg-cover bg-no-repeat text-white'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='container space-y-10 text-center'>
        <div className='space-y-6'>
          <h1 className='mx-auto max-w-5xl font-dm-serif text-5xl tracking-wider sm:text-6xl lg:text-7xl'>
            Cita Rasa Nusantara dalam Setiap Sajian Minuman
          </h1>
          <p className='mx-auto block max-w-md font-raleway'>
            Menyelami Kelezatan Warisan Kuliner Indonesia yang Menggugah Lidah
            dan Menyentuh Hati.
          </p>
        </div>
        <Link
          to='product-section'
          spy
          smooth
          offset={0}
          duration={500}
          className='inline-block cursor-pointer rounded-md bg-orange-900 px-6 py-3 tracking-wider shadow-lg transition-colors duration-300 hover:bg-amber-700'
        >
          Belanja Sekarang
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
