import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Avatar from 'react-avatar'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function TestimoniSliderSection() {
  const cards = [
    {
      id: 1,
      title: 'Bpk Mahmud',
      description:
        'Sirup Yang-ti adalah rahasia kebahagiaan di setiap perayaan kami. Rasanya yang lezat dan beragam varian rasa membuat acara-acara kami selalu meriah. Terima kasih, Sirup Yang-ti, telah membuat momen spesial kami menjadi lebih manis!',
      image: 'https://example.com/card1.jpg',
      rates: Array(5).fill({ id: 1, icon: <FontAwesomeIcon icon={faStar} /> }),
    },
    {
      id: 2,
      title: 'Bpk Supardi',
      description:
        'Produk Sirup Yang-ti adalah minuman wajib di setiap piknik keluarga kami. Rasanya yang segar dan varian rasanya yang beragam selalu menjadi favorit anak-anak dan orang tua. Sirup Yang-ti selalu memberikan kesan manis dalam setiap perjalanan kami bersama keluarga',
      image: 'https://example.com/card2.jpg',
    },
    {
      id: 3,
      title: 'Bu yuji',
      description:
        'Sirup Yang-ti benar-benar memberikan nilai lebih untuk uang yang saya keluarkan. Rasanya yang lezat dan kemasannya yang praktis membuatnya menjadi pilihan terbaik.Saya sangat merekomendasikan Sirup Yang-ti kepada siapa pun yang mencari sirup berkualitas tinggi',
      image: 'https://example.com/card3.jpg',
    },
    {
      id: 4,
      title: 'Mas Yanuar',
      description:
        'Anak-anak saya sangat menyukai Sirup Yang-ti! Rasanya begitu autentik dan lezat dan Sirup Yang-ti telah menjadi teman setia di setiap sarapan pagi saya. Rasanya yang nikmat dan teksturnya yang pas membuat sarapan saya lebih spesial. Tidak ada lagi sarapan membosankan berkat Sirup Yang-ti!',
      image: 'https://example.com/card3.jpg',
    },
    {
      id: 5,
      title: 'BU Min',
      description:
        'Sirup Yang-ti benar-benar menyelamatkan hari saya! Ketika tamu mendadak datang, saya selalu menyajikan minuman dengan sirup ini, Terima kasih, Sirup Yang-ti, telah memberikan kebahagiaan di setiap tegukan.',
      image: 'https://example.com/card3.jpg',
    },
    {
      id: 6,
      title: 'Pak Yanto ',
      description:
        'Sirup Yang-ti adalah pilihan terbaik untuk keluarga kami. Tidak ada bahan kimia berbahaya dan rasanya begitu segar dan alami. Saya merasa senang bisa memberikan yang terbaik untuk keluarga saya dengan memilih Sirup Yang-ti sebagai minuman favorit kami',
      image: 'https://example.com/card3.jpg',
    },
    {
      id: 7,
      title: 'Mas Gilang',
      description:
        'Produk Sirup Yang-ti luar biasa! Rasanya begitu autentik dan mengingatkan saya pada masa kecil saya. Saya selalu kembali untuk membeli lebih banyak botolnya. Sirup Yang-ti sudah menjadi bagian penting dari hidup saya!',
      image: 'https://example.com/card3.jpg',
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className=' testimoni mt-20 w-full  '>
      <div className='container'>
        <div className='  w-full   py-20'>
          <div className='gap-4'>
            <h1 className='mb-10 font-dm-serif text-2xl font-extrabold sm:text-4xl lg:text-4xl'>
              Apa Kata Mereka?{' '}
            </h1>
            <p className='mb-10'>
              Simak para Konsumen Sirup Secang Yang-ti yang telah
              mengkonsumsinya
            </p>
          </div>
          <div className='mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none'>
            <Slider {...settings}>
              {cards.map((card) => (
                <div key={card.id} className=''>
                  <div className=' card_testimoni mb-6 max-w-sm overflow-hidden rounded-lg shadow-lg'>
                    <div className='flex justify-between px-8 py-4'>
                      <Avatar
                        name={card.title}
                        src={card.image}
                        size='40'
                        round
                      />

                      <RiDoubleQuotesR className='' />
                    </div>
                    <div className='px-6 py-4 '>
                      <div className='mb-2 text-xl font-bold'>{card.title}</div>
                      <p className='text-base text-gray-700'>
                        {card.description}
                      </p>
                      <div className='flex'>
                        {[...Array(5)].map((_, index) => (
                          <div key={index} className=''>
                            <FontAwesomeIcon
                              icon={faStar}
                              style={{ color: '#ffc800' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimoniSliderSection
