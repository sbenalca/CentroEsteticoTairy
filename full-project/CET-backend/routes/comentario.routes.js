var express = require('express');
var router = express.Router();

const comentarioController = require("../controllers/comentarios.controller.js");

router.get('/', comentarioController.findAll);
router.get('/search', comentarioController.findOne);

module.exports = router;