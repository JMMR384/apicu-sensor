const express = require('express');
const router = express.Router();
const sectorController = require('../controllers/sectorController');

router.get('/', sectorController.getSectors);
router.post('/', sectorController.addSector);

module.exports = router;