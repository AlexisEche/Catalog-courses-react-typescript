import 'react-app-polyfill/ie11';
import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import filter from '../assets/images/filter.svg';


interface Values {}

 function AdvancedSearchEngine(){
  let categories = ["Negocios","Video","Games","Programción"]
  let subcategories = [ "Marketing Digital", " Lifestyle", "Ilustracion"]
  let levels = ["Avanzado", "Completo", "Introductorio"]
  let prices = [10,20,30]

  return (
    <div className="space-y-10">
      <h4 className="text-2xl font-black">Title H4 - Categorias</h4>
      <button className="flex w-full justify-center xl:hidden  bg-white hover:bg-gray-700  hover:text-white  text-black font-extrabold py-2 rounded-lg px-4 border-4 border-gray-700	rounded">  <img className="pr-2.5" src={filter} alt=""/>Filtrar por </button>
      <Formik
        initialValues={{
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 100);
        }}
      >
        <Form className="space-x-6 hidden xl:flex">
          <div className="container-search-engine flex flex-col justify-between space-y-2">
            <p className="font-bold text-xs">CATEGORIA</p>
            <Field className="w-52 h-12 select p-2 rounded-lg text-gray-300 bg-white border-gray-300 border-2" name="categorie" as="select">
              <option value="">Todos</option>
              {categories.map(categorie =>{
                return (
                  <>
                    <option value={categorie}>{categorie}</option>
                  </>
                )
              })}
            </Field>
          </div>

          <div className="container-search-engine flex flex-col justify-between">
            <p className="font-bold text-xs">SUBCATEGORIA</p>
            <Field className="w-52 h-12 select p-2 rounded-lg text-gray-300 bg-white border-gray-300 border-2" name="subcategorie" as="select">
              <option value="">Todos</option>
              {subcategories.map(subcategorie =>{
                return (
                  <>
                    <option value={subcategorie}>{subcategorie}</option>
                  </>
                )
              })}
            </Field>
          </div>

          <div className="container-search-engine flex flex-col justify-between">
            <p className="font-bold text-xs">NIVEL</p>
            <Field className="w-52 h-12 select p-2 rounded-lg text-gray-300 bg-white border-gray-300 border-2" name="level" as="select">
              <option value="">Todos</option>
              {levels.map(level =>{
                return (
                  <>
                    <option value={level}>{level}</option>
                  </>
                )
              })}
            </Field>
          </div>

          <div className="container-search-engine flex flex-col justify-between">
            <p className="font-bold text-xs">PRECIO</p>
            <Field className="w-52 h-12 select p-2 rounded-lg text-gray-300 bg-white border-gray-300 border-2" name="price" as="select">
              <option value="">Todos</option>
              {prices.map(price =>{
                return (
                  <>
                    <option value={price}>{price}</option>
                  </>
                )
              })}
            </Field>
          </div>
          <div className="flex items-end">
            <button className="w-56 bg-gray-700 text-white font-bold py-2 rounded-lg px-4 border-4 border-gray-700 rounded" type="submit">Aplicar filtros</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default AdvancedSearchEngine