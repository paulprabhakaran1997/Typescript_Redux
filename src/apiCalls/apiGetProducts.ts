import API from "../api/api"
import { IProductAndAppliancesProps } from "../common/Interface/@types"

export const apiGetProducts = (setProducts: React.Dispatch<React.SetStateAction<IProductAndAppliancesProps[]>>) =>{
    API({
        method:'get',
        url:"/products"
    }).then(res => setProducts(res.data))
    .catch(err => err)
}