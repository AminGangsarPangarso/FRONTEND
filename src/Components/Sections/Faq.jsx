import { Disclosure } from '@headlessui/react'
import { TbChevronDown } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import { Element } from 'react-scroll'

const faqData = [
  {
    title: ' Apa itu Sirup Secang Yang-ti?',
    content:
      'Sirup Secang Yang-ti adalah produsen sirup rempah yang memproduksi distribusi dan memasarkan berbagai kemasan dan produk turunannya di wilayah DIY - indonesia yang mengkhususkan diri dalam produksi sirup berkualitas tinggi dengan berbagai varian rasa alami dan segar.',
  },
  {
    title: 'Apakah Sirup Secang Yangti mengandung bahan-bahan halal?',
    content:
      'Ya, Sirup Yangti sepenuhnya halal. Kami memastikan bahwa seluruh bahan yang digunakan dalam produk kami bersertifikat halal dan telah memenuhi standar kehalalan yang diakui.',
  },
  {
    title: 'Apakah produk Sirup Secang Yang-ti aman dikonsumsi?',

    content:
      '  Ya, produk Sirup Yang-ti diproduksi dengan standar keamanan dan kualitas yang tinggi. Semua bahan baku yang digunakan adalah bahan-bahan alami tanpa tambahan bahan kimia berbahaya.Kami mengutamakan penggunaan bahan-bahan alami berkualitas tinggi dalam produk kami.',
  },
  {
    title: ' Bagaimana cara memesan produk Sirup Secang Yang-ti?',
    content:
      ' Anda dapat melakukan pemesanan produk Sirup Yang-ti melalui website kami dengan mudah,  Anda dapat langsung terhubung dengan kami melalui WhatsApp dengan menekan tombol "Beli" yang terdapat pada halaman website kami. Tombol ini akan mengarahkan Anda ke aplikasi WhatsApp dengan nomor kontak kami yang telah tercantum. Anda dapat mengirimkan pesan kepada kami di WhatsApp untuk mendapatkan bantuan lebih lanjut atau melakukan pemesanan secara langsung.',
  },
  {
    title: ' Apakah Sirup Secang Yang-ti melakukan pengiriman ke luar kota?',
    content:
      ' Ya, Kami melayani pengiriman ke berbagai wilayah di Indonesia, sehingga Anda dapat menikmati produk Sirup Secang Yang-ti di mana pun Anda berada.Selain itu, untuk mempermudah pelanggan dalam melakukan pembelian, kami juga menyediakan opsi untuk memesan melalui platform e-commerce terpercaya seperti Shopee dan Tokopedia. Anda dapat menemukan produk Sirup Yang-ti di toko resmi kami di kedua platform tersebut. ',
  },
  {
    title: ' Bagaimana cara menyimpan Sirup Secang Yang-ti dengan benar?',
    content:
      ' Sirup Secang Yang-ti disarankan untuk disimpan di tempat yang sejuk dan kering, jauh dari sinar matahari langsung. Pastikan penutup botol tertutup rapat setelah digunakan untuk menjaga kesegaran dan kualitasnya. ',
  },
]

function FaqSection() {
  return (
    <Element name='/faq' className='element'>
      <div className='container mt-40 '>
        <div className='flex w-full  flex-col items-center justify-center'>
          <div className='flex w-full flex-col items-center justify-center'>
            <h1 className='text-center font-dm-serif text-2xl font-extrabold sm:text-4xl lg:text-4xl'>
              FAQ <span> (Frequently Asked Questions)</span>
            </h1>
          </div>
          <div className='  px-4 pt-10 md:w-full '>
            <div className=' w-full rounded-2xl bg-white p-2 '>
              {faqData.map((val, idx) => (
                <Disclosure as='div' className='mt-8' key={idx}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='faq flex w-full justify-between rounded-lg px-4  py-4 text-left font-bold text-black focus:outline-none  focus-visible:ring focus-visible:ring-opacity-75 md:w-full '>
                        <div className='sm:text-sm md:text-2xl'>
                          {val.title}
                        </div>
                        <div className=' px-2 '>
                          <TbChevronDown
                            className={twMerge(
                              ' h-6 w-6 rounded-full bg-amber-900 text-white sm:h-6 sm:w-6',
                              open && 'rotate-180 transform'
                            )}
                          />
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className='px-4 pb-2 pt-4 text-base text-gray-500 md:text-lg'>
                        {val.content}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default FaqSection
