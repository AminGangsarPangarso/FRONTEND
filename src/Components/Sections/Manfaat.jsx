import React from 'react'
import gambarmanfaat from '@/assets/Image/gambarmanfaat.png'
import logohealty from '@/assets/Image/logohealty.png'
import logohati from '@/assets/Image/logohati.png'
import logomeditasi from '@/assets/Image/logomeditasi.png'
import logosmile from '@/assets/Image/logosmile.png'

function ManfaatSection() {
  return (
    <div className='manfaat'>
      <div className=' container '>
        <div className='   px-10 py-20'>
          <div className=' grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col items-center justify-center rounded-sm md:order-2 md:items-end'>
              <img src={gambarmanfaat} alt='' />
            </div>
            <div className='flex flex-col  items-center md:order-1 md:items-start '>
              <h1 className='mb-5 font-dm-serif text-[30px] text-black'>
                Manfaat Sirup Secang Yang-Ti
              </h1>
              <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 '>
                <div className=''>
                  <img src={logohealty} alt='mt-4' />
                  <h4 className='text-md mt-6 font-dm-serif font-bold md:text-2xl  '>
                    Meningkatkan Kekebalan Tubuh
                  </h4>
                  <p className='mt-4 w-full'>
                    Bahan-bahan alami seperti jahe yang terdapat dalam minuman
                    Yang-Ti dapat membantu meningkatkan sistem kekebalan tubuh,
                    menjaga tubuh agar lebih tahan terhadap penyakit dan
                    infeksi.
                  </p>
                </div>
                <div className='mt-4'>
                  <img src={logosmile} alt='' />
                  <h4 className='text-md mt-2 font-dm-serif font-bold md:text-2xl'>
                    Menyegarkan Mood
                  </h4>
                  <p className='mt-4 w-full '>
                    Minum Yang-Ti dapat memberikan efek menyegarkan pada tubuh
                    dan pikiran. Aroma rempahnya dapat membantu meningkatkan
                    suasana hati dan meningkatkan mood booster.
                  </p>
                </div>
                <div className='mt-4'>
                  <img src={logomeditasi} alt='' />
                  <h4 className='text-md mt-6 font-dm-serif font-bold md:text-2xl'>
                    Pemulihan dan Relaksasi
                  </h4>
                  <p className='mt-4 w-full '>
                    Minuman rempah Yang-Ti dapat memberikan rasa hangat yang
                    menenangkan, membantu meredakan stres, traditional healing
                    dan memulihkan energi setelah aktivitas seharian.
                  </p>
                </div>
                <div className='mt-4'>
                  <img src={logohati} alt='' />
                  <h4 className='text-md mt-6 font-dm-serif font-bold md:text-2xl'>
                    Membantu Pencernaan
                  </h4>
                  <p className='mt-4 w-full '>
                    Rempah-rempah yang digunakan dalam Yang-Ti membantu
                    menghangatkan badan,mengurangi gangguan pencernaan seperti
                    perut kembung atau mual.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManfaatSection
