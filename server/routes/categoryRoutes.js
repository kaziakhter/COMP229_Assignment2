const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

const { categoryByID } = categoryController;  // Ensure correct import

// Use the categoryByID middleware to retrieve category by ID
router.param('id', categoryByID);

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.addCategory);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategoryById);
router.delete('/:id', categoryController.removeCategoryById);

module.exports = router;