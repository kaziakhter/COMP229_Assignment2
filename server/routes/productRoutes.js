const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

const { validateProductInput } = productController; // Destructure the middleware


router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', validateProductInput, productController.addProduct);
router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.removeProductById);
router.delete('/', productController.removeAllProducts);
router.get('/search', productController.findProductsByName);

module.exports = router;