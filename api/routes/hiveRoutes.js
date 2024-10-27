const express = require('express');
const router = express.Router();
const hiveController = require('../controllers/hiveController');

router.get('/', hiveController.getHives);
router.post('/', hiveController.addHive);

module.exports = router;