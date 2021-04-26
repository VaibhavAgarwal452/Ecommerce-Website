import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';
import {
  getProducts,
  getProductById,
} from '../controllers/productControllers.js';

// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});

//     res.json(products);
//   })
// );
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404);
//       throw new Error('Product Not Found');
//     }
//   })
// );

export default router;
