let express = require('express');
let router = express.Router();
 

const tutorials = require('../controllers/tutorial.js');





router.post('/api/tutorials/create', tutorials.create);
router.get('/api/tutorials/getAllTutorials', tutorials.findAll);
router.put('/api/tutorials/updateTutorial/:id', tutorials.update);
router.delete('/api/tutorials/deleteTutorial/:id', tutorials.delete);
router.delete('/api/tutorials/deleteallTutorial', tutorials.deleteall);


module.exports = router;