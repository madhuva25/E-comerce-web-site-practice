import express from "express";
import {addOrder} from "../controler/orderControl.js";
import {geteOrder} from "../controler/orderControl.js";
import {deleteOrder} from "../controler/orderControl.js";
const router = express.Router();



router.post("/order/:id",addOrder);
router.get("/order/",geteOrder);
router.delete("/order/:id",deleteOrder)

export default router;