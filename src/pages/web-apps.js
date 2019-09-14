import React from 'react'
import Layout from 'src/components/layout'
import ContactFooter from 'src/components/ContactFooter'
import SEO from '../components/seo'

export default function WebApps() {
  return (
    <Layout>
      <SEO />
      <div className="min-h-screen bg-breadman-black pt-24 pb-12 md:pt-64 px-6">
        <div className="flex flex-wrap items-center justify-between lg:justify-around mt-24 max-w-6xl mx-auto">
          <div className="flex-1">
            <h1 className="text-white text-5xl md:text-6xl uppercase font-serif font-black leading-none">
              WEB/<span className="text-breadman-red">APPS</span>
            </h1>
            <h3 className="leading-none text-breadman-red mb-4 text-medium">
              SITIO WEB/DESARROLLO/APPS
            </h3>
            <p className="text-white max-w-sm">
              Usamos métodos de optimización de recursos para que nuestros
              sitios funcionen a alta velocidad en conexiones 3G móviles,
              asegurándonos de siempre calificar en Google con una puntuación de
              90+, lo que mejora el posicionamiento en búsquedas.
              <br />
              <br />
              En el ámbito del desarrollo móvil, usamos React Native que es el
              mejor ambiente de desarrollo para aplicaciones Android e iOS, con
              esto nos aseguramos de mantener la consistencia entre plataformas
              para garantizar la mejor experiencia de usuario.
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
                  Sitio web
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red px-4 pb-4 mb-4">
                  eCommerce
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red px-4 pb-4 mb-4">
                  Landing page
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red px-4 pb-4 mb-4">
                  Desarrollo web
                </p>
                <p className="text-white text-sm text-center pb-4 mb-4">Apps</p>
              </div>
            </div>
          </div>
        </div>
        <ContactFooter
          title="¿Sabes si tu negocio necesita un sitio web?"
          description={`
          Invertir en un sitio web puede ser la piedra angular de tu negocio. Si tienes dudas sobre las ventajas, los beneficios y el crecimiento que genera tener presencia online, escríbenos y recibe asesoría gratuita sobre sitios web para tu negocio.
        `}
        />
      </div>
    </Layout>
  )
}
