import React from "react";
import { gql, useQuery } from "@apollo/client";

import {useProductsQuery} from"../src/generated/graphql"
import { PropsSingleProduct, SingleProductProduct } from "./renderProudect";
import { RenderAllProduct } from "./renderAllProduct";

interface Attrs{
  
    name:string,
    value:string
  
    
  }
 
function Products() {
  const { loading, error, data } = useProductsQuery();
  let attrs:Array<Attrs>=[]
  console.log("my data is",data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if(!data || data.products.length < 1){
    return <div className="text-center text-xl font-bold w-full h-8"> there is no item found right now </div>
  }
  if(data || data.products){
let arr:Array<PropsSingleProduct>=[]
    const products=data.products;
    
   
      return(
        <>
      <div className="min-h-screen bg-gray-100   mx-auto container ">
      <div className="grid grid-cols-3 gap-4 mx-auto container items-center rounded-lg">
      { products.map(item=>(
        <SingleProductProduct price={item.price} key={item.id} attrs={item.attrs}/>
    ))}
    </div></div>
    </>)

}}

export default Products;
