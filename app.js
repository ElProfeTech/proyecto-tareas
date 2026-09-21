const express= require("express")

const router=require("./rutas/rutas")

const app=express()

app.use("/api",router)


app.get("/", (req, res)=>{

    

} )






module.exports=app