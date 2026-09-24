const express=require("express")

const router=express.Router()



const{verTareas, verTarea, crearTarea, actualizarTarea, borrarTarea, actualizarEstado, buscarPorEstado}=require("../controladores/controladores")


router.get("/tareas", verTareas)

router.get("/tareas/:id", verTarea)

router.post("/tareas", crearTarea)

router.put("/tareas/:id", actualizarTarea)

router.delete("/tareas/:id", borrarTarea)

router.patch("/tareas/:id/estado", actualizarEstado)

router.get("/tareas/estado/:estado", buscarPorEstado)










module.exports=router