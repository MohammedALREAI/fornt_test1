import React from 'react'

export interface PropsSingleProduct {
 
    product:{
        name:string,
        description:string
    }
    price:number,
    attrs:[{
        name:string
        value:string
      }] 
}

export const SingleProductProduct = ({product,price,attrs}: PropsSingleProduct) => {
    return (
       
<div className="min-h-screen bg-gray-100 py-6   sm:py-12 mx-auto container ">
  <div className="flex flex-row justify-between mx-auto container items-center rounded-lg">
    <div className="w-1/3 bg-gray-400 justify-center items-center border-1 rounded-lg border-gray-300">
      <h4 className="m-2 font-light text-xl">product information</h4>
      <div className="flex justify-between m-2">
        <p className="text-lg font-extralight">name</p>
        <span> {product.name}</span>
      </div>
      <div className="flex justify-between m-2">
        <p className="text-lg font-bold">desccription</p>
        <span> {product.description}</span>
      </div>
      <h4 className="m-2 font-light text-xl border-gray-400  border-t-2">more info</h4>
      <div className="flex justify-between m-2">
        <p className="text-lg font-bold">price</p>
        <span> {price} $</span>
      </div>
      <div className="flex justify-between m-2">
        <p className="text-lg font-bold">attr</p>
      </div>
      { attrs && attrs.map((x,index)=>{
          < div key={`${index}_${x.name}`}>

          <div className="flex justify-between m-2">
                 <p className="text-lg font-bold">name</p>
                 <span> {x.name}</span>
                 
               </div>   
          <div className="flex justify-between m-2">
                 <p className="text-lg font-bold">value</p>
                 <span> {x.value}</span>
                 
               </div>   
            </ div>    
      }
      
      
      )}
       </div>
    
  </div>
</div>

    )
}
