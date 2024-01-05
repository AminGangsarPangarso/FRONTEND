import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { getInitials } from '@/utils/string'

const settings = {
  dots: false,
  draggable: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'testimonials',
  autoplaySpeed: 4000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const testimonials = [
  {
    name: 'Bpk Mahmud',
    summary:
      'Sirup Yang-ti adalah rahasia kebahagiaan di setiap perayaan kami. Rasanya yang lezat dan beragam varian rasa membuat acara-acara kami selalu meriah. Terima kasih, Sirup Yang-ti, telah membuat momen spesial kami menjadi lebih manis!',
  },
  {
    name: 'Bpk Supardi',
    summary:
      'Produk Sirup Yang-ti adalah minuman wajib di setiap piknik keluarga kami. Rasanya yang segar dan varian rasanya yang beragam selalu menjadi favorit anak-anak dan orang tua. Sirup Yang-ti selalu memberikan kesan manis dalam setiap perjalanan kami bersama keluarga',
  },
  {
    name: 'Bu yuji',
    summary:
      'Sirup Yang-ti benar-benar memberikan nilai lebih untuk uang yang saya keluarkan. Rasanya yang lezat dan kemasannya yang praktis membuatnya menjadi pilihan terbaik.Saya sangat merekomendasikan Sirup Yang-ti kepada siapa pun yang mencari sirup berkualitas tinggi',
  },
  {
    name: 'Mas Yanuar',
    summary:
      'Anak-anak saya sangat menyukai Sirup Yang-ti! Rasanya begitu autentik dan lezat dan Sirup Yang-ti telah menjadi teman setia di setiap sarapan pagi saya. Rasanya yang nikmat dan teksturnya yang pas membuat sarapan saya lebih spesial. Tidak ada lagi sarapan membosankan berkat Sirup Yang-ti!',
  },
  {
    name: 'Bu Min',
    summary:
      'Sirup Yang-ti benar-benar menyelamatkan hari saya! Ketika tamu mendadak datang, saya selalu menyajikan minuman dengan sirup ini, Terima kasih, Sirup Yang-ti, telah memberikan kebahagiaan di setiap tegukan.',
  },
  {
    name: 'Pak Yanto ',
    summary:
      'Sirup Yang-ti adalah pilihan terbaik untuk keluarga kami. Tidak ada bahan kimia berbahaya dan rasanya begitu segar dan alami. Saya merasa senang bisa memberikan yang terbaik untuk keluarga saya dengan memilih Sirup Yang-ti sebagai minuman favorit kami',
  },
  {
    name: 'Mas Gilang',
    summary:
      'Produk Sirup Yang-ti luar biasa! Rasanya begitu autentik dan mengingatkan saya pada masa kecil saya. Saya selalu kembali untuk membeli lebih banyak botolnya. Sirup Yang-ti sudah menjadi bagian penting dari hidup saya!',
  },
]

function NextArrow(props) {
  const { className, onClick } = props
  return (
    <button type='button' className={className} onClick={onClick}>
      <div className='text-primary-300 absolute -left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-full'>
        <ChevronLeft className='h-12 w-12' />
      </div>
    </button>
  )
}

function PrevArrow(props) {
  const { className, onClick } = props
  return (
    <button type='button' className={className} onClick={onClick}>
      <div className='text-primary-300 absolute -right-[72px] top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-full'>
        <ChevronRight className='h-12 w-12' />
      </div>
    </button>
  )
}

function TestimonialSection() {
  return (
    <div className='container overflow-hidden py-10 !pb-10 lg:py-12 xl:py-20'>
      <div className='flex flex-col justify-center space-y-4'>
        <div className='space-y-2 text-center'>
          <h1 className='mx-auto max-w-5xl text-center font-dm-serif text-4xl tracking-wider sm:text-5xl'>
            Apa Kata Mereka?
          </h1>
          <p className='font-raleway'>
            Simak para Konsumen Sirup Secang Yang-ti yang telah mengkonsumsinya
          </p>
        </div>
        <div className='relative mx-auto w-full max-w-6xl px-0 lg:px-8'>
          <Slider {...settings}>
            {testimonials.map(({ name, summary }, idx) => {
              return (
                <div key={idx} className='flex items-center justify-center'>
                  <div className='mx-4 mt-14 flex flex-col items-center justify-start gap-3 rounded-lg bg-white p-2 md:p-4 md:pt-10'>
                    <div className='-mt-10 box-border flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-4 border-[#d87607] bg-[#fde58a] text-2xl tracking-wider text-[#78340f] md:-mt-16'>
                      {getInitials(name)}
                    </div>
                    <h3 className='text-2xl'>{name}</h3>
                    <p className='px-2 text-center font-raleway'>{summary}</p>
                    <div className='flex flex-row gap-0.5 pb-3 pt-1'>
                      {Array.from({ length: 5 }).map((_, index) => {
                        return (
                          <Star
                            key={index}
                            className='h-5 w-5 text-yellow-700'
                          />
                        )
                      })}
                      {/* <Rating initialValue={rating} disabled size='md' /> */}
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
