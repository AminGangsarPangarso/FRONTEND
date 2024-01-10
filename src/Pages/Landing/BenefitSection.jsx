import imgBenefit from '@/assets/image/benefit.jpg'
import iconHealty from '@/assets/image/icon/healty.png'
import iconHati from '@/assets/image/icon/hati.png'
import logoMeditasi from '@/assets/image/icon/meditasi.png'
import logoSmile from '@/assets/image/icon/smile.png'

const contents = [
  {
    image: iconHealty,
    title: 'Meningkatkan Kekebalan Tubuh',
    description:
      'Bahan-bahan alami seperti jahe yang terdapat dalam minuman Yang-Ti dapat membantu meningkatkan sistem kekebalan tubuh, menjaga tubuh agar lebih tahan terhadap penyakit dan infeksi.',
  },
  {
    image: logoSmile,
    title: 'Menyegarkan Mood',
    description:
      'Minum Yang-Ti dapat memberikan efek menyegarkan pada tubuh dan pikiran. Aroma rempahnya dapat membantu meningkatkan suasana hati dan meningkatkan mood booster.',
  },
  {
    image: logoMeditasi,
    title: 'Pemulihan dan Relaksasi',
    description:
      'Minuman rempah Yang-Ti dapat memberikan rasa hangat yang menenangkan, membantu meredakan stres, traditional healing dan memulihkan energi setelah aktivitas seharian.',
  },
  {
    image: iconHati,
    title: 'Membantu Pencernaan',
    description:
      'Rempah-rempah yang digunakan dalam Yang-Ti membantu menghangatkan badan,mengurangi gangguan pencernaan seperti perut kembung atau mual.',
  },
]

function BenefitSection() {
  return (
    <div className='my-16 bg-[#fffbeb] py-16 shadow-[0px_0px_100px_rgba(146,63,14,.2)] xl:my-28 xl:py-28'>
      <div className='container flex flex-col items-center justify-between gap-10 xl:flex-row'>
        <div className='flex flex-col space-y-10 text-left'>
          <h1 className='max-w-5xl font-dm-serif text-4xl tracking-wider sm:text-5xl'>
            Manfaat Sirup Secang Yang-Ti
          </h1>
          <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2'>
            {contents.map(({ image, title, description }, idx) => {
              return (
                <div key={idx} className='space-y-2'>
                  <img src={image} alt={title} />
                  <h4 className='max-w-lg font-dm-serif text-2xl'>{title}</h4>
                  <p className='mx-auto max-w-3xl font-raleway'>
                    {description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <img src={imgBenefit} className='w-full max-w-md shadow-none' alt='' />
      </div>
    </div>
  )
}
export default BenefitSection
