import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center gap-5'>
      <div className='-space-y-2 text-center font-semibold text-slate-800'>
        <h1 className='text-8xl tracking-widest text-amber-950'>404</h1>
        <h1 className='text-4xl tracking-wide text-amber-600'>
          Page Not Found
        </h1>
      </div>
      <Link
        to='/'
        className='flex items-center gap-2 text-base underline decoration-amber-500 decoration-2 underline-offset-4'
      >
        <ArrowLeft className='h-4 w-4' />
        <span>Back to Home</span>
      </Link>
    </div>
  )
}

export default NotFound
