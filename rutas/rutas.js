const express=require("express")

const router=express.Router()

const{verTareas}=require("../controladores/controladores")


router.get("/tareas", verTareas)










module.exports=router