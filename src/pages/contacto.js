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
      <section className="min-h-screen bg-breadman-black-light pt-32 px-4 pb-12">
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
            <Form className="mx-auto text-white lg:w-1/2 md:w-2/3 border-2 border-breadman-red p-12 rounded-lg">
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

              <button
                className="bg-breadman-red px-8 py-4 rounded text-white mx-auto"
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </Layout>
  )
}

export default ContactPage
