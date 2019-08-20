import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import logo from '../images/logo.png'

function IndexPage() {
  return (
    <Layout>
      <SEO title="Inicio" />
      <section
        className="h-screen bg-breadman-black-light breadman-main"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></section>
    </Layout>
  )
}

export default IndexPage
