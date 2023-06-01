const Joi = require("joi");

const addSchema = Joi.object({
    testEl1: Joi.string().required(),
    testEl2: Joi.number().required()
})

module.exports = {
    addSchema
}