import React, { useEffect, useState } from 'react'
import { IProductAndAppliancesProps } from '../../common/Interface/@types'
import { apiGetProducts } from '../../apiCalls/apiGetProducts'

const Products = () => {

    const [products , setProducts] = useState<IProductAndAppliancesProps[]>([])

    useEffect(() =>{
        apiGetProducts(setProducts)
    },[])

    return (
        <div>
            <h2>Products List</h2>
            <ul>
                {products?.map((data , idx) =>(
                    <li key={data.id}>Name - {data.name} Price - {data.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default Products