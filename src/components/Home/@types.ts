export interface IHomeProps {
    name : string,
    age:number,
    friendsList?:{
        id:number,
        name:string,
        age:number
    }[]
}