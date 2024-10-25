import { Router } from "express"
import {listProducts,addProducts } from "./controllers"

const router=Router()

router.get("/getproduct",listProducts)
router.post("/addproduct",addProducts)



export {router}