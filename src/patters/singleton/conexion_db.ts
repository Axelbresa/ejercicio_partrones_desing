import {config_db, Sequelize} from "./config_db"

export class ConexionDB{
    private username: string;
    private puerto: string;
    private database: string;
    private password: string;
    private host: string;

    constructor(config_db: Sequelize) {  // Recibe la configuración como parámetro
        this.puerto = config_db.puerto;
        this.username = config_db.username;
        this.database = config_db.database;
        this.password = config_db.password;
        this.host = config_db.host;
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