import React, { useState } from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import name from '../images/name.png'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  const [isPinned, setPinned] = useState(false)

  function toggle() {
    toggleExpansion(!isExpanded)
    setPinned(true)
  }

  function pinned() {
    setPinned(true)
  }

  function unPinned() {
    setPinned(false)
  }

  return (
    <Headroom
      onPin={pinned}
      onUnpin={unPinned}
      onUnfix={unPinned}
      style={
        isExpanded
          ? { transform: 'translate3d(0px, 0px, 0px)' }
          : { position: 'absolute' }
      }
      calcHeightOnResize={false}
    >
      <nav className={isPinned || isExpanded ? 'bg-breadman-black-light' : ''}>
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-2 md:p-4">
          <Link to="/" className="flex items-center no-underline text-white">
            <img src={name} alt="breadman logo" className="w-24" />
          </Link>

          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
            onClick={toggle}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } absolute p-4 bg-breadman-black-light md:top-0 md:relative md:bg-transparent md:block md:flex md:items-center w-full md:w-auto left-0 font-serif font-semibold`}
            style={{
              top: isExpanded ? 90 : '',
            }}
          >
            <div className="text-sm">
              <Link
                to="/"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
              >
                Home
              </Link>
              <Link
                to="/branding"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
              >
                Branding
              </Link>
              <Link
                to="/contact"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
              >
                Indentidad
              </Link>
              <Link
                to="/contact"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
              >
                Inbound Mkt
              </Link>
              <Link
                to="/contact"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
              >
                Web/Apps
              </Link>
              <Link
                to="/contact"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  )
}

export default Header
