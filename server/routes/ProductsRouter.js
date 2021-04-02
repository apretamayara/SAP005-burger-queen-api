const { Router } = require('express')
const ProductsController = require('../controller/ProductsController');

const router = Router()


router.get("/",ProductsController.getAll)
router.get("/:id",ProductsController.getId)
router.post("/", ProductsController.post)
router.put("/:id",ProductsController.put)
router.delete("/:id",ProductsController.delete)

module.exports = router;