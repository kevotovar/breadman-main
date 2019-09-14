import React from 'react'
import Link from 'gatsby-link'

export default function ContactFooter({
  title = '¿Cómo vas con tu negocio?',
  description = `Queremos saber la historia de tu negocio, las inquietudes y
preocupaciones a las que te enfrentas día a día, los objetivos y metas
que tienes planteados para tu negocio, los puntos que quisieras mejorar
o lo que sea que nos quieras platicar, queremos conocerte.`,
}) {
  return (
    <div className="my-20 flex flex-col items-center">
      <h6 className="text-breadman-red text-center text-3xl font-medium mb-4 font-serif">
        {title}
      </h6>
      <p className="max-w-xl text-center text-white font-light mb-6 leading-tight">
        {description}
      </p>
      <Link
        to="/contacto"
        className="rounded bg-breadman-red text-white py-4 px-6 font-medium"
      >
        Escríbenos
      </Link>
    </div>
  )
}
