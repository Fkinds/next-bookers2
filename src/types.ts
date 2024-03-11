import { InitializeHook } from "module"

export type userType = {
    id: string
    name: string
    email: string
    introduction: string
    image: string
}

export type bookType = {
    id : number
    title : string
    body: string 
    userId : string
    userName : string
    urlparameter : string
    httpMethod : string
}

export type bookFormType = {
    urlparameter : string
    httpMethod : string 
}

export type objectType = bookFormType[] | bookType[] | any

export type dataType =  {
    Data : {
        books : bookType[] 
        users : userType[] 
        book: bookType
        user : userType
    }
}