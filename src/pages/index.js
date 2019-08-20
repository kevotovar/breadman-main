import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import logo from '../images/logo.png'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Inicio" />
      <section
        className="h-screen bg-breadman-black-light breadman-main flex items-center p-8"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <div className="max-w-6xl mx-auto flex-1">
          <h4 className="text-breadman-red font-serif  text-2xl leading-none font-medium">
            HOLA SOMOS
          </h4>
          <h1 className="text-white font-serif text-5xl md:text-6xl leading-none font-black mb-4">
            BREADMAN
          </h1>
          <p className="text-white md:max-w-md">
            Y ayudámos a empresas a transformarse en marcas. Marcas que piensen,
            con una voz propia que comunique el mensaje que quieres dar; marcas
            que generen contenido de valor diseñado correctamente; marcas que
            existan y funcionen en la web, que generen prospectos, qué generen
            clientes, qué generen ventas.
          </p>
        </div>
      </section>
      <div className="md:h-screen md:flex items-center p-8 justify-between">
        <div className="w-full md:w-1/5">
          <h5 className="text-breadman-black-light font-serif font-black text-4xl mb-4">
            BRANDING
          </h5>
          <p>
            Muchas personas confunden “Branding” con “hacer un logo”; y en
            cierta forma si lo es, pero, hacer el logo es solo un eslabón en la
            cadena de atributos que componen el Branding. Hacer branding se
            trata de generar emociones y sentimientos en las personas a travez
            de la <i className="font-semibold">personalidad, voz</i> y{' '}
            <i className="font-semibold">valores de la marca.</i>
          </p>
        </div>
        <div className="w-full mt-6 md:mt-0 md:w-3/5">
          <p className="text-breadman-black-light text-6xl leading-none font-serif font-black mb-6">
            <span className="text-breadman-red">Brand</span> is not equal to
            identity; identity is the result of an effective{' '}
            <span className="text-breadman-red">brand.</span>
          </p>
          <div className="bg-breadman-red h-2 w-24 mb-4"></div>
          <p className="font-light text-xl">Erick Straghalis</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
