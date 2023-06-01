const {Router, request} = require("express");

const router = Router();

const ctrl = require("../../controllers/details")

const {addSchema} = require("../../schemas/details")

const {validateBody} = require("../../middlewares")

router.get("/hcheck", ctrl.checkHealth)

router.get("/", ctrl.getAll)

router.get("/:id", ctrl.getById)

router.post("/", validateBody(addSchema), ctrl.add)

module.exports = router;