import express from 'express'
import {
  CreateProduct,
  GetProducts,
  GetProductById,
  DeleteProduct,
  UpdatedProduct
} from "../controller/product.controller.js";
const router = express.Router();


//Get
router.get('/', GetProducts);
router.get('/:id', GetProductById);

//Post
router.post("/", CreateProduct);


//Put
router.put("/:id", UpdatedProduct);


//Delete
router.delete("/:id", DeleteProduct);


export default router;