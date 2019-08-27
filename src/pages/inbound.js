import React from 'react'
import Layout from 'src/components/layout'
import ContactFooter from 'src/components/ContactFooter'

export default function Branding() {
  return (
    <Layout>
      <div className="min-h-screen bg-breadman-black pt-24 pb-12 md:pt-64">
        <div className="flex flex-col items-center mt-24 max-w-6xl mx-auto">
          <h1 className="text-white text-5xl md:text-6xl uppercase font-serif font-black leading-none">
            INBOUND MKT
          </h1>
          <h3 className="text-center leading-none text-breadman-red mb-4">
            ATTACT / CONVERT / CLOSE / DELIGHT
          </h3>
          <p className="text-white text-center max-w-sm">
            Basados en la metodología Inbound , nos enfocamos en el Journey del
            usuario; desde que tiene contacto por primera vez con la marca,
            hasta el momento de la transacción final.
            <br />
            <br />
            Esto, a través de cuatro etapas:
            <br />
            <span className="text-breadman-red">
              Attract, Convert, Close, Delight.
            </span>
          </p>
        </div>
        <div className="flex flex-wrap items-stretch justify-between max-w-6xl mx-auto mt-20">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="flex flex-col border-2 border-breadman-red rounded-lg">
              <div className="flex flex-col items-center flex-1 p-5">
                <h5 className="text-2xl text-breadman-red text-center">
                  Attract
                </h5>
                <div className="w-6 h-1 bg-breadman-red mt-2 mb-6"></div>
                <p className="text-white text-center text-sm">
                  Buscamos atraer el mayor tráfico posible a nuestra web o blog
                  y lo hacemos por medio de redes sociales donde compartimos
                  contenido de valor gratuito y descargable para nuestro target.
                </p>
              </div>
              <div className="border-t-2 border-breadman-red px-6 pt-4">
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  Blog / Contenido
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  SEO / Adds / Pauta
                </p>
                <p className="text-white text-sm text-center pb-4 mb-4">
                  Redes sociales
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="flex flex-col border-2 border-breadman-red rounded-lg">
              <div className="flex flex-col items-center flex-1 p-5">
                <h5 className="text-2xl text-breadman-red text-center">
                  Convert
                </h5>
                <div className="w-6 h-1 bg-breadman-red mt-2 mb-6"></div>
                <p className="text-white text-center text-sm">
                  En esta etapa vamos a conseguir que las visitas al sitio web
                  se conviertan en registros que a su vez irán alimentando una
                  base de datos de calidad con la que empezaremos a trabajar
                </p>
              </div>
              <div className="border-t-2 border-breadman-red px-6 pt-4">
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  Formulario
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  Landing
                </p>
                <p className="text-white text-sm text-center pb-4 mb-4">
                  Base de datos
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="h-full flex flex-col border-2 border-breadman-red rounded-lg">
              <div className="flex flex-col items-center flex-1 p-5">
                <h5 className="text-2xl text-breadman-red text-center">
                  Close
                </h5>
                <div className="w-6 h-1 bg-breadman-red mt-2 mb-6"></div>
                <p className="text-white text-center text-sm">
                  Aquí entramos al proceso de maduración y calificación del
                  lead, donde evaluamos el nivel de decisión de compra que tiene
                  un cliente potencial.
                  <br />
                  <br />
                  De acuerdo a los resultados segmentamos las audiencias para
                  iniciar campañas de mailing que influyan en la decisión de
                  compra o recompra.
                </p>
              </div>
              <div className="border-t-2 border-breadman-red px-6 pt-4">
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  Mailing
                </p>
                <p className="text-white text-sm text-center pb-4 mb-4">CRM</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="h-full flex flex-col border-2 border-breadman-red rounded-lg">
              <div className="flex flex-col items-center flex-1 p-5">
                <h5 className="text-2xl text-breadman-red text-center">
                  Delight
                </h5>
                <div className="w-6 h-1 bg-breadman-red mt-2 mb-6"></div>
                <p className="text-white text-center text-sm">
                  En esta última etapa buscamos fidelizar a nuestros clientes,
                  consintiéndolos periódicamente con información relevante,
                  promociones o beneficios. Esto con el objetivo de la recompra
                  generando empatía y gusto por la marca.
                </p>
              </div>
              <div className="border-t-2 border-breadman-red px-6 pt-4">
                <p className="text-white text-sm text-center pb-4 mb-4">
                  Contenido de valor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContactFooter
          title="¿Estás generando lo que te mereces?"
          description={`
          Si no estas vendiendo, si te cuesta trabajo conseguir más clientes, si estas teniendo meses malos y meses buenos, el Inbound Marketing te puede ser de mucha ayuda. Platícanos la situación por la que atraviesa tu empresa, queremos escucharte.
        `}
        />
      </div>
    </Layout>
  )
}
