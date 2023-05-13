const mongoose = require("mongoose")

function connectDB() {
  mongoose.connect('mongodb+srv://gutielpro:Tw99YKH1dd41cU6f@cluster0.tw8s1v9.mongodb.net/car-fast').then(()=>{console.log("conectado")}) 
   
    /* mongoose.connect("mongodb://127.0.0.1:27017/carro").then(()=>{console.log("conectado");}) //localmente db */
}
module.exports =connectDB
