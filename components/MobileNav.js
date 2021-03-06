import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <SectionContainer>
      <div className="sm:hidden">
        <button
          type="button"
          className="w-8 h-8 ml-1 mr-1 rounded focus:outline-none"
          aria-label="Toggle Menu"
          onClick={onToggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-gray-900 dark:text-gray-100"
          >
            {navShow ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
        <div
          className={`fixed w-full h-full top-24 right-0 bg-white dark:bg-gray-900 z-10 transform ease-in-out duration-300 ${
            navShow ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button> */}
          <nav className="fixed w-full h-full mt-8 flex flex-col justify-start">
            <div>
              {headerNavLinks.map((link) => (
                <div key={link.title} className="py-2 px-2 mx-6">
                  <Link
                    href={link.href}
                    className="text-xl tracking-wider font-medium uppercase text-gray-500 dark:text-gray-500"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>
            {/* <div className="mt-72">
            <Footer />
          </div> */}
          </nav>
        </div>
      </div>
    </SectionContainer>
  )
}

export default MobileNav
