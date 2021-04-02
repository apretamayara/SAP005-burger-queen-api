const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()


router.get("/", UsersController.getAll )
router.get("/:id",UsersController.getId)
router.post("/", UsersController.post)
router.put("/:id",UsersController.put)
router.delete("/:id",UsersController.delete)

module.exports = router;
