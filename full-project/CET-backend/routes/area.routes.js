var express = require('express');
var router = express.Router();

const areaController = require("../controllers/areas.controller.js");

router.get('/', areaController.findAll);
router.get('/search', areaController.findOne);

module.exports = router;