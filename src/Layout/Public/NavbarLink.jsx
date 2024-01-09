import { Link, scroller } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
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

function NavbarLink({ className, itemClassName, onClick, isHome }) {
  return (
    <ul className={className}>
      {links.map(({ to, name }, idx) => {
        const linkClassName = cn(
          'inline-flex cursor-pointer rounded-b-sm rounded-t-lg border-b-2 border-b-transparent px-6 py-2 text-center font-raleway text-sm font-semibold tracking-wide text-gray-300 transition-colors duration-300 hover:bg-amber-700 hover:text-white',
          itemClassName
        )

        return (
          <li key={idx}>
            {isHome ? (
              <Link
                to={to}
                spy
                smooth
                offset={0}
                duration={250}
                onClick={onClick}
                activeClass='!border-b-amber-700 !bg-amber-900/50'
                className={linkClassName}
              >
                {name}
              </Link>
            ) : (
              <RouterLink
                to='/'
                className={linkClassName}
                onClick={(e) => {
                  const timeout = setTimeout(() => {
                    e.preventDefault()
                    scroller.scrollTo(to, {
                      duration: 250,
                      delay: 0,
                      smooth: true,
                      offset: 0,
                    })
                    clearTimeout(timeout)
                  }, 250)
                }}
              >
                {name}
              </RouterLink>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarLink
