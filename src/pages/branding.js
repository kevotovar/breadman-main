import React from 'react'
import Layout from 'src/components/layout'
import ContactFooter from 'src/components/ContactFooter'

export default function Branding() {
  return (
    <Layout>
      <div className="min-h-screen bg-breadman-black pt-24 pb-12 md:pt-64">
        <div className="flex flex-col items-center mt-24 max-w-6xl mx-auto">
          <h1 className="text-white text-5xl md:text-6xl uppercase font-serif font-black leading-none">
            Branding
          </h1>
          <h3 className="text-center leading-none text-breadman-red mb-4">
            TARGET / PERSONALITY / VOICE / VALUES
          </h3>
          <p className="text-white text-center max-w-sm">
            Construimos marcas que piensen y hablen de manera atractiva a su
            nicho de mercado.
            <br />
            <br />
            ¿Cómo lo hacemos?
            <br />
            Lo primero que vamos a hacer es definir la personalidad, después la
            voz y al final los valores que componen a la marca.
          </p>
        </div>
        <div className="flex flex-wrap items-stretch justify-between max-w-6xl mx-auto mt-20">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="flex flex-col border-2 border-breadman-red rounded-lg">
              <div className="flex flex-col items-center flex-1 p-5">
                <h5 className="text-2xl text-breadman-red text-center">
                  Target
                </h5>
                <div className="w-6 h-1 bg-breadman-red mt-2 mb-6"></div>
                <p className="text-white text-center text-sm">
                  Definimos un nicho específico al cual vamos a estudiar para
                  conocerlo a fondo.
                  <br />
                  <br />
                  Sabremos cuáles son las necesidades de nuestro Target,
                  sabrémos como piensan y conoceremos a nuestra competencia.
                </p>
              </div>
              <div className="border-t-2 border-breadman-red px-6 pt-4">
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  Estudio de segmento de mercado
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  Buyer persona
                </p>
                <p className="text-white text-sm text-center pb-4 mb-4">
                  Propuesta de valor
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="flex flex-col border-2 border-breadman-red rounded-lg">
              <div className="flex flex-col items-center flex-1 p-5">
                <h5 className="text-2xl text-breadman-red text-center">
                  Personality
                </h5>
                <div className="w-6 h-1 bg-breadman-red mt-2 mb-6"></div>
                <p className="text-white text-center text-sm">
                  Si tu marca fuera una persona ¿cómo se llamaría? ¿cómo
                  actuaría? ¿qué gustos tendría? ¿qué rol jugaría? ¿cómo
                  pensaría?
                  <br />
                  <br />
                  Nos encargamos de conceptualizar tu marca creando una
                  personalidad coherente con el target.
                </p>
              </div>
              <div className="border-t-2 border-breadman-red px-6 pt-4">
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  Naming
                </p>
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  Avatar
                </p>
                <p className="text-white text-sm text-center pb-4 mb-4">
                  Idea de marca
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="h-full flex flex-col border-2 border-breadman-red rounded-lg">
              <div className="flex flex-col items-center flex-1 p-5">
                <h5 className="text-2xl text-breadman-red text-center">
                  Voice
                </h5>
                <div className="w-6 h-1 bg-breadman-red mt-2 mb-6"></div>
                <p className="text-white text-center text-sm">
                  ¿Cómo es la voz de tu marca? ¿Es hombre o es mujer? ¿Es firme
                  o relajada? ¿Es seria o tiene sentido del humor?
                  <br />
                  <br />
                  Ya que tenemos una personalidad definida le ponemos una voz y
                  un tono a nuestra marca con el fin de poder comunicarse con el
                  target.
                </p>
              </div>
              <div className="border-t-2 border-breadman-red px-6 pt-4">
                <p className="text-white text-sm text-center border-b-2 border-breadman-red pb-4 mb-4">
                  Voz
                </p>
                <p className="text-white text-sm text-center pb-4 mb-4">Tono</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="h-full flex flex-col border-2 border-breadman-red rounded-lg">
              <div className="flex flex-col items-center flex-1 p-5">
                <h5 className="text-2xl text-breadman-red text-center">
                  Values
                </h5>
                <div className="w-6 h-1 bg-breadman-red mt-2 mb-6"></div>
                <p className="text-white text-center text-sm">
                  ¿Cuáles son los valores de nuestra marca? ¿cree en la amistad,
                  en la familia? ¿promueve el desarrollo personal? ¿fomenta la
                  creatividad? ¿enseña, educa?
                  <br />
                  <br />
                  Los valores son los que hacen que un usuario se quede con tu
                  marca, porque comparten pensamientos, posturas y creencias que
                  les generan pertenencia.
                </p>
              </div>
              <div className="border-t-2 border-breadman-red px-6 pt-4">
                <p className="text-white text-sm text-center pb-4 mb-4">
                  Definición de los valores de la marca.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContactFooter />
      </div>
    </Layout>
  )
}
