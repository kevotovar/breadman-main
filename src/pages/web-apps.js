import React from 'react'
import Layout from 'src/components/layout'
import ContactFooter from 'src/components/ContactFooter'

export default function WebApps() {
  return (
    <Layout>
      <div className="min-h-screen bg-breadman-black pt-24 pb-12 md:pt-64 px-6">
        <div className="flex flex-wrap items-center justify-between lg:justify-around mt-24 max-w-6xl mx-auto">
          <div className="flex-1">
            <h1 className="text-white text-5xl md:text-6xl uppercase font-serif font-black leading-none">
              WEB | <span className="text-breadman-red">APPS</span>
            </h1>
            <h3 className="leading-none text-breadman-red mb-4">
              SITIO WEB / DESARROLLO / APPS
            </h3>
            <p className="text-white max-w-sm">
              Usamos métodos de optimización de recursos para que nuestros
              sitios funcionen a alta velocidad en conexiones 3g móviles,
              asegurándonos de siempre calificar en google con una puntuación de
              90+ mejorando el posicionamiento en búsquedas.
              <br />
              <br />
              En el ámbito del desarrollo móvil usamos React Native, siendo el
              mejor ambiente de desarrollo para aplicaciones Android y iOS, con
              esto nos aseguramos de mantener la consistencia entre plataformas
              para asegurar la mejor experiencia de usuario.
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
          Hacer un sitio web no es cosa menor y por eso es normal que te surjan muchas dudas sobre si es o no necesario, las ventajas que ofrece, los beneficios y el crecimiento que representa tener presencia online. Escríbenos y recibe asesoría gratuita sobre todo lo que necesitas saber de sitios web para tu negocio.
        `}
        />
      </div>
    </Layout>
  )
}
