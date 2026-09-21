
const pool=require("../base_datos/bd")




const verTareas=async(req, res)=>{

const[resultado]=await pool.query(
"select * from tareas"
)

try {

    if(!resultado){
 res.status(400).json({
  mensaje: "No hay tareas"
 })
}
res.status(200).json({
    mensaje: "Listado de tareas",
    tareas: resultado
})


} catch (error) {
    console.error("Error interno del servidor", error)
}



}




module.exports={

    verTareas
}