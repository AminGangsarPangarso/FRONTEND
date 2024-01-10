import React from 'react'
import Collapsible from '@/Components/Collapsible'

const accordionItems = [
  {
    title: ' Apa itu Sirup Secang Yang-ti?',
    content:
      'Sirup Secang Yang-ti adalah produsen sirup rempah yang memproduksi distribusi dan memasarkan berbagai kemasan dan produk turunannya di wilayah DIY - indonesia yang mengkhususkan diri dalam produksi sirup berkualitas tinggi dengan berbagai varian rasa alami dan segar.',
  },
  {
    title: 'Apakah Sirup Secang Yang-ti mengandung bahan-bahan halal?',
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
    <div className='container py-10 pb-20 lg:py-12 xl:py-20'>
      <div className='flex flex-col justify-center space-y-10 lg:space-y-16'>
        <div className='space-y-2 text-center'>
          <h1 className='mx-auto max-w-5xl text-center font-dm-serif text-4xl tracking-wider sm:text-5xl'>
            FAQ
          </h1>
          <p className='font-raleway'>(Frequently Asked Questions)</p>
        </div>
        <div className='mx-auto flex max-w-3xl flex-col justify-center gap-6'>
          {accordionItems.map(({ title, content }, idx) => {
            return (
              <Collapsible title={title} key={idx}>
                {content}
              </Collapsible>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FaqSection
