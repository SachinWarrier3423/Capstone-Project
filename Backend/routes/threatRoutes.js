const router = require('express').Router();
const {
  getThreats,
  createThreat,
  updateThreat,
  deleteThreat
} = require('../controllers/threatController');
const { verifyToken } = require('../middlewares/auth');

router.get('/', verifyToken, getThreats);
router.post('/', verifyToken, createThreat);
router.put('/:id', verifyToken, updateThreat);
router.delete('/:id', verifyToken, deleteThreat);

module.exports = router;