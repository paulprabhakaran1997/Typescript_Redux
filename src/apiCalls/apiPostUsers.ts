import API from "../api/api"


// export const apiPostUsers = (userObj:{}) =>{

//     API({
//         method:'post',
//         url:'/users',
//         data:userObj
//     }).then().catch(
//         err => console.log(err.message)
//     )
// }

export const apiPostUsers = (userObj: {}) => new Promise((resolve, reject) => {
    API({
        method: 'post',
        url: '/users',
        data: userObj
    }).then((res:any) =>{
        !res.error ? resolve(res?.status) : resolve(404)
    }).catch((error) =>{
        resolve(error?.response?.status)
    })
})