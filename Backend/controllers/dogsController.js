const asyncHandler = require('express-async-handler')
const Dog = require('../models/dogsModel')

// @desc    Get Dogs
// @route   GET /api/dogs
// @access  Private
const getDogs = asyncHandler(async (req, res) => {
    const dogs = await Dog.find()

    res.status(200).json(dogs)
});

// @desc    Set Dogs
// @route   POST /api/dogs
// @access  Private
const setDog = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const dog = await Dog.create({
        text: req.body.text
    })

    res.status(200).json({dog})
});

// @desc    Update Dogs
// @route   PUT /api/dogs/:id
// @access  Private
const updateDog = asyncHandler(async (req, res) => {
    const dog = await Dog.findById(req.params.id, req.body, {new:true})

    if(!dog) {
        res.status(400)
        throw new Error('Dog not found')
    }

    const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })

    res.status(200).json(updatedDog)
});

// @desc    Delete Dogs
// @route   DELETE /api/dogs/:id
// @access  Private
const deleteDog = asyncHandler(async (req, res) => {
    const dog = await Dog.findById(req.params.id)

    await dog.remove()

    res.status(200).json({id: req.params.id})
});

module.exports = {
    getDogs, 
    setDog, 
    updateDog, 
    deleteDog,
};