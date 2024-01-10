import React, { useEffect, useRef, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/utils/classes'

function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const updateContentHeight = () => {
      const calcHeight =
        parseInt(ref?.current?.scrollHeight, 10) +
        parseInt(getComputedStyle(ref?.current)?.marginTop, 10) +
        parseInt(getComputedStyle(ref?.current)?.marginBottom, 10)
      setHeight(!Number.isNaN(calcHeight) && isOpen ? calcHeight : 0)
    }
    updateContentHeight()
    window.addEventListener('resize', updateContentHeight)
    return () => {
      window.removeEventListener('resize', updateContentHeight)
    }
  }, [isOpen])

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  const contentStyle = {
    height: `${height}px`,
    transition: 'height 0.3s ease-in-out',
  }

  return (
    <div className='w-full'>
      <button
        type='button'
        onClick={toggleCollapse}
        className='flex w-full cursor-pointer items-center justify-between rounded-md border-2 border-[#f49d0c] bg-[#fef3c7] px-6 py-3 text-left'
      >
        <h2 className='text-lg tracking-wide'>{title}</h2>
        <ChevronUp
          className={cn(
            'h-6 w-6 rotate-0 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div style={contentStyle} className='overflow-hidden'>
        <p ref={ref} className='mt-3 rounded-md bg-white p-4 font-raleway'>
          {children}
        </p>
      </div>
    </div>
  )
}

export default Collapsible
