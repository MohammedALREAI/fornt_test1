import React from "react";
import { gql, useQuery } from "@apollo/client";

import {useProductsQuery} from"../src/generated/graphql"
import { PropsSingleProduct } from "./renderProudect";
import { RenderAllProduct } from "./renderAllProduct";

interface Attrs{
  
    name:string,
    value:string
  
    
  }
  let attrs:[{
    name:string
    value:string
  }] 
function Products() {
  const { loading, error, data } = useProductsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if(!data || data.products.length < 1){
    return <div className="text-center text-xl font-bold w-full h-8"> there is no item found right now </div>
  }
  if(data || data.products){
let arr:Array<PropsSingleProduct>=[]
    const products=data.products;
    
    for (let index = 0; index < products.length; index++) {
        for (let index2 = 0; index2 < products[index].attrs.length; index2++) {
          attrs.push({
            name:products[index].attrs[index2].name,
            value:products[index].attrs[index2].value,
          })
        }

        arr.push({
          product:{name:products[index].product.name,
            description:products[index].product.description
          },
          price:products[index].price,
          attrs 
        })


      

  


  return <div>
    <RenderAllProduct data={arr}/>

  </div>;}
}}

export default Products;
