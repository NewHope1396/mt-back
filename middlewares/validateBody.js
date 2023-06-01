const {HttpError} = require("../helpers");

const validateBody = schema => {

    const func = (req, res, next) => {
        const {error} = schema.validate(req.body, {convert: false});
        if (error) {
            next(HttpError(400, error.message))
        }

        next()
    }

    return func
}

module.exports = validateBody;