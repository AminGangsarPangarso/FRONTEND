import { Star } from 'lucide-react'
import { getInitials } from '@/utils/string'

function TestimonialCard({ name, summary }) {
  return (
    <div className='flex items-center justify-center'>
      <div className='mx-4 mt-14 flex flex-col items-center justify-start gap-3 rounded-lg bg-white p-2 md:p-4 md:pt-10'>
        <div className='-mt-10 box-border flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-4 border-[#d87607] bg-[#fde58a] text-2xl tracking-wider text-[#78340f] md:-mt-16'>
          {getInitials(name)}
        </div>
        <h3 className='text-2xl'>{name}</h3>
        <p className='px-2 text-center font-raleway'>{summary}</p>
        <div className='flex flex-row gap-0.5 pb-3 pt-1'>
          {Array.from({ length: 5 }).map((_, index) => {
            return <Star key={index} className='h-5 w-5 text-yellow-700' />
          })}
          {/* <Rating initialValue={rating} disabled size='md' /> */}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
