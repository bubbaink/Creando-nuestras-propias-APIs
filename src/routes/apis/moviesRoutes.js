const express = require("express");
const router = express.Router();
const moviesController = require("../../controllers/apis/moviesControllerApi");

/* /api/movies */
router
  .get("/", moviesController.list)
  .get("/new", moviesController.new)
  .get("/recommended", moviesController.recomended)
  .get("/:id", moviesController.detail)
  //Rutas exigidas para la creación del CRUD
  .post("/", moviesController.create)
  .put("/:id?", moviesController.update) // ? para que sea optativo
  .delete("/:id?", moviesController.destroy);

module.exports = router;
