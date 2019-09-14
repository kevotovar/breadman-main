import React from 'react'

export default function Footer() {
  return (
    <div className="bg-breadman-black flex-col md:flex-row p-8 md:p-16 flex justify-between md:items-center">
      <p className="leading-tight text-breadman-grey">
        <strong>Siguenos en:</strong>
        <br />
        <a href="https://www.instagram.com/breadman.mx/" target="blank">
          Instagram
        </a>
        <br />
        <a href="https://www.facebook.com/breadman.mx/" target="blank">
          Facebook
        </a>
      </p>
      <p className="text-breadman-grey my-4 md:my-0">
        © 2019 <strong className="text-white">Breadman</strong>. All rights
        reserved
      </p>
      <p className="text-breadman-grey md:text-right">
        CDMX
        <br />
        <a href="mailto:hello@breadman.mx">hello@breadman.mx</a>
        <br />
        <a href="tel:+5512970503">5512970503</a>
        <br />
        <a href="tel:+5512970503">5551324855</a>
      </p>
    </div>
  )
}
