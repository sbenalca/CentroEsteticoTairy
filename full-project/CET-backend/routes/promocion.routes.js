var express = require('express');
var router = express.Router();

const promocionController = require("../controllers/promociones.controller.js");

router.get('/', promocionController.findAll);
router.get('/search', promocionController.findOne);

module.exports = router;