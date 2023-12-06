import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl font-semibold text-stone-800'>
        Page Not Found 404
      </h1>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default NotFound
