export interface RegisterDTO{
    name: string;
    email:string;
    password:string;
    mobileNumber:number;
    gender:string;
    address:string;
    city:string;
    country:string;
}

export interface LoginDTO{
    email:string;
    password:string;
}