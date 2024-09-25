export interface Sequelize{
    puerto:string,
    database:string, 
    username:string, 
    password:string, 
    host: string
}

export const config:Sequelize ={
    puerto:"3000",
    database:"inventarioDb",
    username:"Axel",
    password:"1234", 
    host: "localhost"
}