import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Layout from '../components/layout'
import SEO from '../components/seo'

const MySwal = withReactContent(Swal)

const VALIDATON_SCHEMA = yup.object().shape({
  nombre: yup.string().required(),
  mail: yup
    .string()
    .email()
    .required(),
  mensaje: yup.string().required(),
})

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contacto" />
      <div className="min-h-screen bg-breadman-black-light">
        <section className="mx-auto max-w-6xl pt-32 px-4 md:px-0 pb-12 flex flex-wrap items-center">
          <div className="w-full lg:w-1/3 mb-10">
            <h1 className="text-white text-5xl leading-tight font-bold mb-24">
              ¡Platícanos sobre tú empresa o proyecto!
            </h1>
            <a
              className="bg-breadman-red px-8 py-4 rounded text-white mx-auto"
              href="tel:5512970503"
            >
              Llámanos
            </a>
            <p className="text-breadman-grey mt-10">
              <strong className="text-white">CDMX</strong>
              <br />
              <a href="mailto:hello@breadman.mx">hello@breadman.mx</a>
              <br />
              <a href="tel:+5512970503">5512970503</a>
              <br />
              <a href="tel:+5512970503">5551324855</a>
            </p>
          </div>
          <Formik
            initialValues={{
              nombre: '',
              mail: '',
              mensaje: '',
            }}
            validationSchema={VALIDATON_SCHEMA}
            onSubmit={async (values, formikActions) => {
              try {
                await axios.get(
                  'https://hooks.zapier.com/hooks/catch/2973738/o3tanls/',
                  {
                    params: values,
                  }
                )
                MySwal.fire({
                  toast: true,
                  type: 'success',
                  title: 'Formulario enviado',
                  text: 'Pronto nos comunicaremos contigo',
                  position: 'top-end',
                  showConfirmButton: false,
                })
              } catch (e) {
                console.error(e)
                formikActions.setSubmitting(false)
                MySwal.fire({
                  toast: true,
                  type: 'error',
                  title: 'Error al enviar el formulario',
                  text: 'Revisa que tengas conexion a internet',
                  position: 'top-end',
                  showConfirmButton: false,
                })
              }
            }}
          >
            {({ values, handleChange, handleBlur, isValid, isSubmitting }) => (
              <Form className="mx-auto text-white lg:w-1/2 w-full border-2 border-breadman-red p-12 rounded-lg">
                <h1 className="text-4xl text-center text-breadman-red mb-8">
                  Contacto
                </h1>
                <div className="bg-breadman-red h-1 w-8 mx-auto mb-8"></div>
                <input
                  className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md w-full bg-breadman-black text-white p-4"
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nombre}
                />
                <input
                  className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md w-full bg-breadman-black text-white p-4"
                  id="mail"
                  name="mail"
                  type="text"
                  placeholder="Mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mail}
                />
                <textarea
                  className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md w-full bg-breadman-black text-white p-4"
                  id="mensaje"
                  name="mensaje"
                  placeholder="Mensaje"
                  rows="8"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mensaje}
                />
                <div className="text-center">
                  <button
                    className="bg-breadman-red px-8 py-4 rounded text-white mx-auto"
                    disabled={!isValid || isSubmitting}
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </Layout>
  )
}

export default ContactPage
