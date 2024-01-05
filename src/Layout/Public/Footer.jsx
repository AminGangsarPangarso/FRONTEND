import logo from '@/assets/image/logo.png'
import {
  Instagram,
  Mail,
  MapPin,
  MonitorPlay,
  Phone,
  ShoppingBag,
  ShoppingBasket,
} from 'lucide-react'

const footer = {
  socials: [
    {
      link: 'https://tokopedia.link/yz4c9p3bXBb',
      icon: ShoppingBag,
    },
    {
      link: 'https://shope.ee/2AlaWxkQ7e',
      icon: ShoppingBasket,
    },
    {
      link: 'https://www.tiktok.com/@sirupyangti',
      icon: MonitorPlay,
    },
    {
      link: 'https://www.instagram.com/sirupsecangyangti/',
      icon: Instagram,
    },
  ],
  pages: [
    {
      name: 'Home it work',
      link: '/',
    },
    {
      name: 'Pricing',
      link: '/',
    },
    {
      name: 'Blog',
      link: '/',
    },
    {
      name: 'Demo',
      link: '/',
    },
  ],
  contact: [
    {
      description: '+628123456789',
      icon: Phone,
    },
    {
      description: 'sirupyangti@gmail.com',
      icon: Mail,
    },
    {
      description: (
        <>
          Perum II, Jalan Jeruk D36 RT:006 RW:015, <br /> Kel. Sidoarum, Kap.
          Godean, Sleman, DI Yogyakarta.
        </>
      ),
      icon: MapPin,
    },
  ],
}

function Footer() {
  return (
    <footer className='bg-[#310a01] py-20 text-white'>
      <div className='container flex flex-col items-start justify-evenly gap-10 md:flex-row md:items-center'>
        <div className='flex flex-col text-center'>
          <img src={logo} alt='Logo' className='w-30 mx-auto h-auto' />
          <ul className='mt-4 flex items-center justify-center gap-4 px-2 py-2 text-center text-lg'>
            {footer.socials.map(({ link, icon: Icon }, idx) => {
              return (
                <li key={idx}>
                  <a href={link} target='_blank' rel='noreferrer noopener'>
                    <Icon className='h-6 w-6' />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='flex flex-col space-y-4 md:space-y-6'>
          <h1 className='font-dm-serif text-2xl font-bold tracking-wider'>
            Pages
          </h1>
          <ul className='space-y-3'>
            {footer.pages.map(({ link, name }, idx) => {
              return (
                <li key={idx} className='font-raleway'>
                  <a href={link} target='_blank' rel='noreferrer noopener'>
                    {name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='flex flex-col space-y-4 md:space-y-6'>
          <h1 className='font-dm-serif text-2xl font-bold tracking-wider'>
            Contact
          </h1>
          <ul className='space-y-3'>
            {footer.contact.map(({ description, icon: Icon }, idx) => {
              return (
                <li key={idx} className='flex gap-3 font-raleway'>
                  <Icon className='h-6 w-6' />
                  <span>{description}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
