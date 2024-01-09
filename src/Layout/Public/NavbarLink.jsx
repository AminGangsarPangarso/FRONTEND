import { Link } from 'react-scroll'
import { cn } from '@/utils/classes'

const links = [
  {
    to: 'hero-section',
    name: 'Home',
  },
  {
    to: 'about-section',
    name: 'About',
  },
  {
    to: 'product-section',
    name: 'Product',
  },
  {
    to: 'faq-section',
    name: 'FAQ',
  },
]

function NavbarLink({ className, itemClassName, onClick }) {
  return (
    <ul className={className}>
      {links.map(({ to, name }, idx) => {
        return (
          <li key={idx}>
            <Link
              to={to}
              spy
              smooth
              offset={0}
              duration={250}
              onClick={onClick}
              activeClass='!border-b-amber-700 !bg-amber-900/50'
              className={cn(
                'inline-flex cursor-pointer rounded-b-sm rounded-t-lg border-b-2 border-b-transparent px-6 py-2 text-center font-raleway text-sm font-semibold tracking-wide text-gray-300 transition-colors duration-300 hover:bg-amber-700 hover:text-white',
                itemClassName
              )}
            >
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarLink
