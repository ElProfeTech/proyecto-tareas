const app=require("./app")

require("dotenv").config()

const port=process.env.PORT




app.listen( port,()=>{
   console.log(`El servidor esta escuchando en el puerto ${port}` ) 
})