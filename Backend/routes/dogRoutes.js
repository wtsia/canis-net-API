const express = require('express');
const router = express.Router();
const { 
    getDogs, 
    setDog, 
    updateDog, 
    deleteDog,
} = require('../controllers/dogsController');

router.route('/').get(getDogs).post(setDog);
router.route('/:id').delete(deleteDog).put(updateDog);

module.exports = router