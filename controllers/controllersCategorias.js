const connection = require("../database");

const obtenerCategorias = (req, res) => {
  connection.query("SELECT * FROM categorias", (error, results) => {
    if (error) {
      console.error("No se obtuvieron las categorias", error);
      res.status(500).json({ error: "No se obtuvieron las categorias" });
    } else {
      console.log("Se obtuvieron las categorias correctamente");
      res.json(results);
    }
  });
};

const obtenerCategoriaPorId = (req, res) => {
  const id = req.params.id_categoria;

  connection.query("SELECT * FROM categorias WHERE id_categoria = ?",[id], (error, results) => {
    if (error) {
      console.error("No se obtuvieron las categorias", error);
      res.status(500).json({ error: "No se obtuvo la categoria" });
    }else if (results.length === 0){
      res.status(500).json({ error: "No se encontro la categoria" });
    } else {
      console.log("Se obtuvo la categoria correctamente");
      res.json(results[0]);
    }
  });
};

const crearCategoria =  (req,res) => {
    const {nombre} = req.body;

    connection.query("INSERT INTO categorias (nombre) VALUE (?)",[nombre],(error,results)=>{
        if(error){
            console.error("No se creo la categoria correctamente",error);
            res.status(500).json({error:"No se creo la categoria correctamente"});
        }else{
            res.json({Message:"La categoria se creó correctamente"});        
        }
    })
}

const actualizarCategoriaPorId = (req,res) => {
  const id = req.params.id_categoria;
  const {nombre,imagen_categoria} = req.body;

  connection.query("UPDATE categorias SET nombre = ?, imagen_categoria = ? WHERE id_categoria = ?",[nombre,imagen_categoria,id], (error, results) => {
    if (error) {
      console.error("No se actualizó la categoria", error);
      res.status(500).json({ error: "No se actualizó la categoria" });
    }else {
      res.json({message:"Se actualizó la categoria correctamente"});
    }
  });
} 

const eliminarCategoriaPorId = (req,res) => {
  const id = req.params.id_categoria;

  connection.query("DELETE FROM categorias WHERE id_categoria = ?",[id], (error, results) => {
    if (error) {
      console.error("No se eliminó la categoria", error);
      res.status(500).json({ error: "No se eliminó la categoria" });
    }else {
      res.json({message:"Se eliminó la categoria correctamente"});
    }
  });
} 

module.exports = {
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoriaPorId,
    eliminarCategoriaPorId,
}