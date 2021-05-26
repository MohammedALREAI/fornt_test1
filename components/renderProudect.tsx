import React from 'react'

export interface PropsSingleProduct {
 
   
    price:number,
    attrs:[{
      name:string,value:string
    }]
}

export const SingleProductProduct = ({price,attrs}: PropsSingleProduct) => {
    return (
       
<div className=" bg-gray-100   mx-auto container ">
  <div className=" mx-auto container items-center rounded-lg">
    <div className=" bg-gray-400 justify-center items-center border-1 rounded-lg border-gray-300">
      
      <h4 className="m-2 font-light text-xl border-gray-400  border-t-2">more info</h4>
      <div className="flex justify-between m-2">
        <p className="text-lg font-bold">price</p>
        <span> {price} $</span>
      </div>
      <div className="flex justify-between m-2">
        <p className="text-lg font-bold">attr</p>
        <div className="text-lg font-bold flex justify-between m-2">{attrs.map((c,index)=>(
           <div key={`${index}_${c.name}`}>
           <div className="flex justify-between m-2">
             <div>
             <p className="text-lg font-bold">name</p>
                  <span> {c.name}</span>
             </div>
                 <div>
                 <p className="text-lg font-bold">value</p>
                  <span> {c.value}</span>
                  
                 </div>
                </div> 
                </div>  
        ))}
        </div>
      </div>
    

      {attrs.map((x,index)=>{
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
