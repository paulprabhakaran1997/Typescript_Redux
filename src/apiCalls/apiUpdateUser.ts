import API from "../api/api"

export const apiUpdateUser = (id:number,userObj:{}) => new Promise((resolve , reject) =>{
    API({
        method:'PUT',
        url:'/users/'+id,
        data:userObj
    }).then((res:any) =>{
        !res.error ? resolve({status : res?.status , message : 'Success'}) : resolve(404)
    }).catch((error) =>{
        resolve(({status : error?.response?.status , message : error?.message}))
    })
})