const express = require("express");
const router = express.Router();
const genresController = require("../../controllers/apis/genresControllerApi");

router.get("/", genresController.list);
router.get("/:id", genresController.detail);

module.exports = router;
