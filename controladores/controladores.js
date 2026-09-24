
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


const verTarea= async (req, res)=>{

const idTarea= parseInt(req.params.id)

 const [resultado]= await pool.query(
"select * from tareas where id=?",
 [idTarea]

 )
try {
    if(resultado!=0){
    return res.status(200).json({
    mensaje:"La tarea es: ",
    tarea: resultado[0]
})
}

  res.status(400).json({
    mensaje: "No existen tareas con ese id"
 })

} catch (error) {
    console.error("Error interno del servidor", error)
}



}



const crearTarea= async (req, res) => {

    const {titulo, descripcion, estado, fecha_limite}=req.body

    if(!titulo || !descripcion || !estado || !fecha_limite){
       return res.status(400).json({
            mensaje: "No puede dejar ningun campo vacio"
        })

    }

    try {
      const [resultado]=await pool.query(
"insert into tareas (titulo, descripcion, estado, fecha_limite) values(?,?,?,?)",
 [titulo, descripcion, estado, fecha_limite]
)  

if(resultado.affectedRows!=0){
 return res.status(200).json({
    mensaje: "Tarea creada: ",
    tarea: resultado.insertId
 })
}
return res.status(400).json({
    mensaje:"No se pudo crear la tarea"
})



    } catch (error) {
        console.error("Error interno del servidor ", error)
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        })
    }



}

const actualizarTarea=async(req,res)=>{
     const idTarea=parseInt(req.params.id)
    const{titulo, descripcion, estado, fecha_limite}=req.body
    
    try {
       const [resultado]=await pool.query(
        "update tareas set titulo=?, descripcion=?, estado=?, fecha_limite=? where id=?",
        [titulo, descripcion, estado, fecha_limite, idTarea]
       ) 
      
       if(resultado.affectedRows!==0){
        return res.status(200).json({
            mensaje:"Tarea actualizada"
        })
       }

       return res.status(400).json({
        mensaje:"La tarea no fue actualizada"
       })

    } catch (error) {
        console.error("Error interno del servidor ", error)
    }

}

const borrarTarea=async(req, res)=>{
    const idTarea=parseInt(req.params.id)
  
try {

    const[resultado]=await pool.query(
    "delete from tareas where id=?",
    [idTarea]
  )
     if(resultado.affectedRows===0){
    return res.status(404).json({
        mensaje:"No existe ese id"
    })
  }
  
  return res.status(200).json({
    mensaje: "Tarea eliminada"
  })

} catch (error) {
   console.error("Error interno del servidor", error) 
}

 
 
}

const actualizarEstado= async(req, res)=>{
  const idTarea=parseInt(req.params.id)
  const {estado}=req.body

  try {
    const [resultado]=await pool.query(
        "update tareas set estado= ? where id = ?",
        [  estado , idTarea]
    )
   if(resultado.affectedRows===0){
   return res.status(404).json({
    mensaje: "No existe es id"
   })
   }
   return res.status(200).json({
    mensaje: "Estado actualizado"
   })



  } catch (error) {
    console.error("Error interno del servidor", error)
  }

}

const buscarPorEstado=async (req, res)=>{
    const P_estado=req.params.estado
    
    try {
       const [resultado]= await pool.query(
        "select * from tareas where estado=?",
        [P_estado]

       )
    if(resultado.length===0){
   return res.status(404).json({
    mensaje: "No se encuentra ese estado"
 })

    }

    return res.status(200).json({
        mensaje: "Lista de tareas por estado",
        estado: resultado
    })

 

        
    } catch (error) {
        console.error("Error interno del servidor")
    }
}


module.exports={

    verTareas,
    verTarea,
    crearTarea,
    actualizarTarea,
    borrarTarea,
    actualizarEstado,
    buscarPorEstado
}