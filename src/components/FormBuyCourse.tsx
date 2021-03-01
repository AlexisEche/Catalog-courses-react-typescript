import React from 'react';
import arrowRight from '../assets/images/arrow-right.svg';
import pagoefectivo from '../assets/images/pagoEfectivo.svg';
import paypal from '../assets/images/paypal.svg';
import banks from '../assets/images/banks.svg';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

function FormBuyCourse(){
  return(
    <div className="sm:w-2/5 w-full flex flex-col justify-between pt-2 sm:pl-20 sm:pt-12 sm:mx-0  p-4">
      <div className="sm:flex sm:block hidden ">
        <div className="flex items-center space-x-1">
          <div className="flex items-center font-bold justify-center text-white circle bg-gray-800 rounded-full w-6">1</div>
          <p className="font-bold text-sm">Proceso de pago</p>
        </div>
        <img src={arrowRight} alt=""/>
        <div className="flex items-center space-x-1">
          <div className="flex items-center font-bold  justify-center text-white circle bg-gray-300 rounded-full w-6">2</div>
          <p className="font-bold text-sm text-gray-300">Paso 2</p>
        </div>
        <img src={arrowRight} alt=""/>
        <div className="sm:flex items-center space-x-1">
          <div className="flex items-center font-bold  justify-center text-white circle bg-gray-300 rounded-full w-6">3 </div>
          <p className="font-bold text-sm text-gray-300">Paso 3</p>
        </div>
      </div>

       <h2 className="sm:pt-12 pt-0 font-black sm:text-4xl text-2xl pb-6">Método de pago </h2>
      
      <div className="">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form className="flex flex-col space-y-2">
            <div className="flex flex-col bg-gray-100 p-7 space-y-5 rounded-lg">
              <div className="flex items-center space-x-3">
                <Field checked type="radio" name="picked" value="One" />
                <p className="text-lg	font-extrabold sm:hidden block ">Tarjeta</p>
                <p className="text-lg	font-extrabold hidden sm:block">Pagar con tarjeta</p>
                <img src={banks} alt=""/>
              </div>
              <div className="flex flex-col">
                <label className="font-bold	text-sm	pb-4" htmlFor="firstName">Correo electrónico</label>
                <Field className="border h-14 rounded-lg pl-4" id="firstName" name="firstName"/>
              </div>
              <div className="flex flex-col">
                <label className="font-bold	text-sm	pb-4" htmlFor="lastName">Número de tarjeta</label>
                <Field className="border h-14 rounded-lg pl-4" id="lastName" name="lastName"/>
              </div>

              <div className="sm:flex flex-col sm:space-x-6 space-x-0 space-y-5">
                <div className="space-y-4">
                  <label className="font-bold	text-sm" htmlFor="lastName">Fecha de vencimiento</label>
                  <Field className="border h-14 rounded-lg pl-4 w-full" id="lastName" name="lastName" placeholder="Ej. 04/22"/>
                </div>
                <div className="space-y-4">
                  <label className="font-bold	text-sm" htmlFor="lastName">Código de seguridad</label>
                  <Field className="border h-14 rounded-lg pl-4 w-full" id="lastName" name="lastName" placeholder="CVC/CVV"/>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-gray-100 p-7 rounded-lg space-x-3">
              <Field type="radio" name="picked" value="One" />
              <img src={pagoefectivo} alt=""/>
            </div>
            <div className="flex items-center bg-gray-100 p-7 rounded-lg space-x-3">
              <Field type="radio" name="picked" value="One" />
              <img src={paypal} alt=""/>
            </div>
            <div className="flex items-center space-x-2.5">
              <Field className="w-4 h-4" checked type="checkbox" name="checkbox" value="One" id="checkbox" />
              <label className="text-xs text-gray-500 pt-7 pb-5" htmlFor="checkbox">Acepto expresamente todos los Términos y Condiciones.</label>
            </div>
            <div className="pb-32">
              <button type="submit" className="sm:w-80 w-full card--buy bg-gray-700 text-white font-bold py-2 rounded-lg border-4 border-gray-700 rounded">Comprar ahora</button>
            </div>

          </Form>
        </Formik>
      </div>

    </div>
  )
}

export default FormBuyCourse;