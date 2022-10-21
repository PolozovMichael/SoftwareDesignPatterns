const express = require('express');
const {loadPage} = require('../controllers/loadPage')
const router = express.Router();

router.route('/').get(loadPage);

module.exports = router;