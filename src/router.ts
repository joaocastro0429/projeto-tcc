import { Router } from "express"
import {listProducts,addProducts,updateProduct,deleteProduct } from "./controllers"

const router=Router()

router.get("/getproduct",listProducts)
router.post("/addproduct",addProducts)
router.put("/updateprduct/:id",updateProduct)
router.delete("/deleteproduct/:id",deleteProduct)


export {router}