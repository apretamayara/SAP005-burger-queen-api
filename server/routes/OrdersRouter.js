const { Router } = require('express')
const OrdersController = require('../controllers/OrdersController');

const router = Router()


router.get("/",OrdersController.getAll)
router.get("/:id",OrdersController.getId)
router.post("/", OrdersController.post)
router.put("/:id",OrdersController.put)
router.delete("/:id",OrdersController.delete)

module.exports = router;