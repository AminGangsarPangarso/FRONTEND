import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const cn = (...className) => {
  return twMerge(clsx(className))
}

export { cn }
