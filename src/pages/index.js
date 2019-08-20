import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import logo from '../images/logo.png'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Inicio" />
      <section
        className="h-screen bg-breadman-black-light breadman-main flex items-center p-4 md:p-8"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <div className="max-w-6xl mx-auto flex-1">
          <h4 className="text-breadman-red font-serif text-2xl leading-none font-medium">
            HOLA SOMOS
          </h4>
          <h4 className="text-white font-serif text-6xl leading-none font-black mb-4">
            BREADMAN
          </h4>
          <p className="text-white md:max-w-md">
            Y ayudámos a empresas a transformarse en marcas. Marcas que piensen,
            con una voz propia que comunique el mensaje que quieres dar; marcas
            que generen contenido de valor diseñado correctamente; marcas que
            existan y funcionen en la web, que generen prospectos, qué generen
            clientes, qué generen ventas.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
