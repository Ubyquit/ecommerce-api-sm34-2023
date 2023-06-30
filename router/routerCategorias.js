const express = require("express");
const controllersCategorias = require("../controllers/controllersCategorias");

const router = express.Router();

router.get('/', controllersCategorias.obtenerCategorias);
router.get('/:id_categoria', controllersCategorias.obtenerCategoriaPorId);
router.post('/', controllersCategorias.crearCategoria);
router.put('/:id_categoria', controllersCategorias.actualizarCategoriaPorId);
router.delete('/:id_categoria', controllersCategorias.eliminarCategoriaPorId);


module.exports = router;
