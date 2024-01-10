import grandKeisha from '@/assets/image/partners/grand_keisha.png'
import jambuluwak from '@/assets/image/partners/jambuluwak.png'
import istanaPresiden from '@/assets/image/partners/istana_presiden.png'
import keraton from '@/assets/image/partners/keraton.png'
import tengklengHohah from '@/assets/image/partners/tengkleng_hohah.png'

const partners = [
  {
    image: keraton,
    title: 'Kraton Yogyakarta',
  },
  {
    image: grandKeisha,
    title: 'Grand Keisha Hotel',
  },
  {
    image: istanaPresiden,
    title: 'Istana Presiden Yogyakarta',
  },
  {
    image: jambuluwak,
    title: 'Jambuluwuk Hotol',
  },
  {
    image: tengklengHohah,
    title: 'Tengkleng Hohah',
  },
]

function PartnerSection() {
  return (
    <div className='container flex flex-col items-center justify-center space-y-10 lg:space-y-16'>
      <h1 className='mx-auto max-w-sm text-center font-dm-serif text-xl tracking-wider sm:text-2xl lg:max-w-2xl'>
        Lihat siapa yang mengkonsumsi Sirup Secang Yang-Ti
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {partners.map(({ image, title }, idx) => {
          return (
            <img
              src={image}
              key={idx}
              alt={title}
              className='h-16 w-auto lg:h-24'
            />
          )
        })}
      </div>
    </div>
  )
}

export default PartnerSection
