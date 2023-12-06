import grandKeisha from '@/assets/Image/hotelgrandkeisha.png'
import jambuLuwak from '@/assets/Image/hoteljambuluwak.png'
import istanaPresiden from '@/assets/Image/istanapresiden.png'
import lambangKraton from '@/assets/Image/lambangkraton.png'
import tengklengHohah from '@/assets/Image/logotengklenghohah.png'

const useProduct = () => {
  return (
    <div className='use-product  flex flex-col items-center justify-center'>
      <div className='title flex w-full items-center justify-center '>
        <h1 className='container mt-10 text-center font-dm-serif text-2xl md:text-4xl lg:text-4xl'>
          Lihat siapa yang mengkonsumsi Sirup Secang Yang-Ti
        </h1>
      </div>

      <div className='img grid w-full grid-cols-2 items-center justify-center gap-4 px-20 py-20 md:flex'>
        <img
          src={lambangKraton}
          alt='kraton yogyakarta'
          className='aspect-square h-32 w-32 object-contain'
        />
        <img
          src={grandKeisha}
          alt='grand keisha hotel'
          className='aspect-square h-32 w-32 object-contain'
        />
        <img
          src={istanaPresiden}
          alt='istana presiden yogyakarta'
          className='aspect-square h-32 w-32 object-contain'
        />
        <img
          src={jambuLuwak}
          alt='jambuluwuk hotol'
          className='aspect-square h-32 w-32 object-contain'
        />
        <img
          src={tengklengHohah}
          alt='tengkleng hohah'
          className='aspect-square h-32 w-32 object-contain'
        />
      </div>
    </div>
  )
}

export default useProduct
