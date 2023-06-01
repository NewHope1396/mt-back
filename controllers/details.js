const details = require("../models/details")

const {HttpError, ctrlWrapper} = require("../helpers");

const checkHealth = (req, res) => {
    res.json({message: "It still works"})
}

const getAll = async (req, res) => {
    const result =  await details.getDetails();
    res.json(result)
}

const getById = async (req, res) => {
    const result = await details.getDetail(req.params.id)
    if (!result) {
        throw HttpError(404, "Not Found")
    }
    res.json(result)
}

const add = async (req, res) => {
    const {body} = req;
    res.status(200).json({...body, message: "It works"});
}

module.exports = {
    checkHealth: ctrlWrapper(checkHealth),
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add)
}