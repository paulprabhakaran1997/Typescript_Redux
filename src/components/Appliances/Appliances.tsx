import React, { useEffect, useState } from 'react'
import { apiGetProducts } from '../../apiCalls/apiGetProducts'
import { IProductAndAppliancesProps } from '../../common/Interface/@types'

const Appliances = () => {
    const [appliances , setAppliances] = useState<IProductAndAppliancesProps[]>([])

    useEffect(() =>{
        apiGetProducts(setAppliances)
    },[])

    return (
        <div>
            <h2>Appliances List</h2>
            <ul>
                {appliances?.map((data , idx) =>(
                    <li key={data.id}>Name - {data.name} Price - {data.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default Appliances