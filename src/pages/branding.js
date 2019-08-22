import React from 'react'
import Layout from 'src/components/layout'

export default function Branding() {
  return (
    <Layout>
      <div className="h-screen bg-breadman-black pt-24 pb-12 md:pt-64">
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
        <div className="flex flex-wrap justify-between max-w-6xl mx-auto"></div>
      </div>
    </Layout>
  )
}
