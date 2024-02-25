const express = require('express');
const router = express.Router();
const answerController = require('../controllers/answerController');

router.get('/', answerController.index);
router.get('/:id', answerController.show);
router.post('/', answerController.create);
router.patch('/:id', answerController.update);
router.delete('/:id', answerController.destroy);

module.exports = router;
