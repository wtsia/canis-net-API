
// @desc    Get Dogs
// @route   GET /api/dogs
// @access  Private
const getDogs = (req, res) => {
    res.status(200).json({ message: 'Get Message' })
};

// @desc    Set Dogs
// @route   POST /api/dogs
// @access  Private
const setDog = (req, res) => {
    if(!req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    res.status(200).json({ message: 'Set Dogs' })
};

// @desc    Update Dogs
// @route   PUT /api/dogs/:id
// @access  Private
const updateDog = (req, res) => {
    res.status(200).json({ message: `Update dog ${req.params.id}` })
};

// @desc    Delete Dogs
// @route   DELETE /api/dogs/:id
// @access  Private
const deleteDog = (req, res) => {
    res.status(200).json({ message: `Delete dog ${req.params.id}` })
};

module.exports = {
    getDogs, 
    setDog, 
    updateDog, 
    deleteDog,
};