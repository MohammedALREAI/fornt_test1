import React from 'react'
import { PropsSingleProduct ,SingleProductProduct} from './renderProudect'

interface Props {
data:Array<PropsSingleProduct>
    
}

export const RenderAllProduct = ({data}: Props) => {
    return (
        <div className="min-h-screen bg-gray-100 py-6   sm:py-12 mx-auto container ">
  <div className="flex flex-row justify-between mx-auto container items-center rounded-lg">
      {data &&data.map((x,index)=>{
          <SingleProductProduct key={`index-${x.product.name}`} {...x}/>
      })}

      </div>
      </div>
    )
}
