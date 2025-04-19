const router = require('express').Router();
const { getAlerts } = require('../controllers/alertController');
const { verifyToken } = require('../middlewares/auth');

router.get('/', verifyToken, getAlerts);

module.exports = router;