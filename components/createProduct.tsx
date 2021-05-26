/* eslint-disable max-len */
import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useCreateProductMutation } from "../src/generated/graphql";
import { useFormik } from "formik";

interface IForm{
    name_product:string,
    description:string
  ,
  price:number,
  attrs:[{
    name:string,
    value:string
  }]
}

export const CreateProduct = () => {

  const [createProductMutation, { data, loading, error }] = useCreateProductMutation(
    {
      // ther is missing data
      onCompleted:(data)=>{
        const {createProduct:{price,id}} =data
         

          alert(` the product item create success for  `);

        
      }
    }
,
  );




  const formik = useFormik<IForm>({
    initialValues: {
     price:0,
      name_product:"",
       description:"",
     
     attrs:[{
       name:"",
       value:""
     }]
    },
    onSubmit: (values) => {
console.log( "the prosuct is",values.description)
      createProductMutation({
        variables:{input:{
          products:{
            name:values.name_product,
            description:values.description,
          
          },
          price:values.price,
          attrs:values.attrs
        }}
      })
    },
  });

 
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add the product{" "}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                fill the filed to create Product{" "}
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={formik.handleSubmit}>
                {" "}
                <fieldset disabled={loading} aria-busy={loading}>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name_product"
                        className="block text-sm font-medium text-gray-700"
                      >
                        name
                      </label>
                      <input
                        type="text"
                        name="name_product"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.name_product}
                        id="name_product"
                        autoComplete="given-name"
                        // eslint-disable-next-line max-len
                        className="mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                        
                      >
                        description
                      </label>
                      <input
                        type="text"
                        name="description"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.description}
                        id="description"
                        autoComplete="given-description"
                        className="mt-1   h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.price}
                        autoComplete="given-price"
                        className="mt-1  h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2" />
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name_arrts"
                        className="block text-sm font-medium text-gray-700"
                      >
                        name Arrts
                      </label>
                      <input
                        onChange={formik.handleChange}
                        defaultValue={formik.values.attrs[0].name}
                        type="text"
                        name="name_arrts"
                        id="name_arrts"
                        autoComplete="given-name_arrts"
                        className="mt-1  h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="value_arrts"
                        className="block text-sm font-medium text-gray-700"
                      >
                        value Arrts
                      </label>
                      <input
                          onChange={formik.handleChange}
                          defaultValue={formik.values.attrs[0].value}
                        type="text"
                        name="value_arrts"
                        id="value_arrts"
                        autoComplete="given-value_arrts"
                        className="mt-1  h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 space-x-2">
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      create
                    </button>
                    <button
                      type="button"
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      clean
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
