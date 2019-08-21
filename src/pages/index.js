import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import KnowMore from '../components/KnowMore'

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
      <div className="md:h-screen p-8 flex items-center">
        <div className="md:flex mx-auto max-w-6xl items-center justify-between">
          <div className="w-full md:w-1/3">
            <h5 className="text-breadman-black-light font-serif font-black text-4xl mb-4">
              BRANDING
            </h5>
            <p className="mb-12">
              Muchas personas confunden “Branding” con “hacer un logo”; y en
              cierta forma si lo es, pero, hacer el logo es solo un eslabón en
              la cadena de atributos que componen el Branding. Hacer branding se
              trata de generar emociones y sentimientos en las personas a travez
              de la <i className="font-semibold">personalidad, voz</i> y{' '}
              <i className="font-semibold">valores de la marca.</i>
            </p>
            <KnowMore variant="white" to="/branding" />
          </div>
          <div className="w-full mt-6 md:mt-0 md:w-3/5">
            <p className="text-breadman-black-light text-5xl md:text-6xl leading-none font-serif font-black mb-6">
              <span className="text-breadman-red">Brand</span> is not equal to
              identity; identity is the result of an effective{' '}
              <span className="text-breadman-red">brand.</span>
            </p>
            <div className="bg-breadman-red h-2 w-24 mb-4"></div>
            <p className="font-light text-xl">Erick Straghalis</p>
          </div>
        </div>
      </div>
      <div className="md:h-screen p-8 flex items-center bg-breadman-red">
        <div className="md:flex mx-auto max-w-6xl items-center justify-between">
          <div className="w-full md:w-1/3">
            <h5 className="text-breadman-black-light font-serif font-black text-4xl mb-4 uppercase leading-none">
              Identidad <br /> <span className="text-white">de Marca</span>
            </h5>
            <p className="mb-12">
              Son todos los aspectos visuales tangibles que forman parte de la
              marca cómo: logotípo, línea gráfica, tipografía, colores,
              anuncios, papelería, etc.
              <br />
              <br />
              En pocas palabras es: la manera visual de decirle a tus clientes
              quién y eres y cómo te ves.
            </p>
            <KnowMore variant="red" to="/marca" />
          </div>
          <div className="w-full mt-6 md:mt-0 md:w-3/5">
            <p className="text-breadman-black-light text-5xl md:text-6xl leading-none font-serif font-black mb-6">
              Los estilos vienen y van. El buen diseño es un{' '}
              <span className="text-white">lenguaje</span>, nunca un estilo.
            </p>
            <div className="bg-white h-2 w-24 mb-4"></div>
            <p className="font-light text-xl text-white">Massimo Vignelli</p>
          </div>
        </div>
      </div>
      <div className="md:h-screen p-8 flex items-center bg-breadman-black-light">
        <div className="md:flex mx-auto max-w-6xl items-center justify-between">
          <div className="w-full md:w-1/3">
            <h5 className="text-breadman-red font-serif font-black text-4xl mb-4 uppercase leading-none">
              Inbound mkt
            </h5>
            <p className="text-white mb-12">
              Es marketing no intrusivo, que se encarga de llevar al usuario por
              todo el proceso de compra; desde que una persona descubre la
              marca, hasta completar una trasacción.
              <br />
              <br />
              Nos bamasos en la creación de contenidos de calidad que aporten
              valor al usuario, que lo eduque, que lo ayude y que lo divierta.
              Esto con el fin de crear una comunidad fiel a tu marca, que
              interactue, que aporte y que ayude a seguir creando la marca.
            </p>
            <KnowMore variant="black" to="/marca" />
          </div>
          <div className="w-full mt-6 md:mt-0 md:w-3/5">
            <p className="text-white text-5xl md:text-6xl leading-none font-serif font-black mb-6">
              Las redes sociales ya no son sobre sitios webs,{' '}
              <span className="text-breadman-red">tratan de experiencias.</span>
            </p>
            <div className="bg-white h-2 w-24 mb-4"></div>
            <p className="font-light text-xl text-white">Mike DiLorenzo</p>
          </div>
        </div>
      </div>
      <div className="md:h-screen p-8 flex items-center">
        <div className="md:flex mx-auto max-w-6xl items-center justify-between">
          <div className="w-full md:w-1/3">
            <h5 className="text-breadman-black-light font-serif font-black text-4xl mb-4 uppercase">
              Web / APPS
            </h5>
            <p className="mb-12">
              Automatizar tu negocio con un sitio web o app puede ser la
              solución a una serie de tareas que están consumiendo tu tiempo
              cómo: cobrar, mandar mails, ir al banco, captar clientes, manejar
              una base de datos. Además, te ayuda a convertir más ventas, atraer
              nuevos prospectos y a fidelizar a tus clientes.
            </p>
            <KnowMore variant="white" to="/web" />
          </div>
          <div className="w-full mt-6 md:mt-0 md:w-3/5">
            <p className="text-breadman-black-light text-5xl md:text-6xl leading-none font-serif font-black mb-6">
              Google es la{' '}
              <span className="text-breadman-red">nueva página de inicio</span>{' '}
              de la empresa.
            </p>
            <div className="bg-breadman-red h-2 w-24 mb-4"></div>
            <p className="font-light text-xl">Jeremías Owyang</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
