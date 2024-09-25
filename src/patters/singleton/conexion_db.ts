import {config, Sequelize} from "./config_db"

export class ConexionDB{
    private username: string;
    private puerto: string;
    private database: string;
    private password: string;
    private host: string;

    constructor(config: Sequelize) {  // Recibe la configuración como parámetro
        this.puerto = config.puerto;
        this.username = config.username;
        this.database = config.database;
        this.password = config.password;
        this.host = config.host;
    }
    
    public listenPuerto(){
        console.log("El servidor esta escuchando en: ")
        console.log("http://localhost:"+this.puerto )
    }

    public conectarDb(){
        console.log(
            "Se ha conectado correctamente el usuario : " +
            this.username   +
            " al host " +
             this.host  +
             " en la base de datos " +
             this.database  
        )
    }

    public desconectarDb(){
        console.log("El usuario " +
            this.username  +
            " se desconectado del base de datos " +
            this.database +
            " correctamente"
            )
    }
}