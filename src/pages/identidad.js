import React from 'react'
import Layout from 'src/components/layout'
import ContactFooter from 'src/components/ContactFooter'

export default function Branding() {
  return (
    <Layout>
      <div className="min-h-screen bg-breadman-black pt-24 pb-12 md:pt-64 px-6">
        <div className="flex flex-wrap items-center justify-between lg:justify-around mt-24 max-w-6xl mx-auto">
          <div className="flex-1">
            <h1 className="text-white text-5xl md:text-6xl uppercase font-serif font-black leading-none">
              IDENTIDAD
            </h1>
            <h3 className="leading-none text-breadman-red mb-4">
              LOGO / DISEÑO GRÁFICO / DIRECCIÓN DE ARTE
            </h3>
            <p className="text-white max-w-sm">
              Creamos una identidad gráfica sólida, que transmita la
              personalidad y los valores de tu empresa.
              <br />
              <br />
              Nos encargamos de todo lo que tenga que ver con la imagen de tu
              empresa, desde el logotipo, hasta el diseño gráfico del sitio web.
            </p>
          </div>
          <div className="w-full md mt-16 md:mt-0 md:w-1/2 lg:w-1/3 md:pl-12">
            <div className="flex flex-col border-2 border-breadman-red rounded-lg">
              <div className="flex flex-col items-center flex-1 p-5">
                <h5 className="text-2xl text-breadman-red text-center">
                  Servicios
                </h5>
                <div className="w-6 h-1 bg-breadman-red mt-2 mb-6"></div>
              </div>
              <div>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red px-4 pb-4 mb-4">
                  Logotipo
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red px-4 pb-4 mb-4">
                  Línea gráfica
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red px-4 pb-4 mb-4">
                  Diseño gráfico
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red px-4 pb-4 mb-4">
                  Diseño web
                </p>
                <p className="text-white text-sm text-center pb-4 mb-4">
                  Dirección de arte
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContactFooter
          title="¿Tienes el logo que quieres?"
          description={`
          Si no estas contento con el logotipo que tienes actualmente, platícanos que no te gusta de él, y que cambios le harías, o bien, si aún no tienes logo también podrías contarnos que traes en mente, en fin, estamos para ayudarte.
        `}
        />
      </div>
    </Layout>
  )
}
