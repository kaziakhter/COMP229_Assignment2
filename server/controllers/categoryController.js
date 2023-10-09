const Category = require('../models/category');

const categoryByID = async (req, res, next, id) => { 
  try {
      const category = await Category.findById(id);
      if (!category) {
          return res.status(400).json({ error: "Category not found" });
      }
      req.category = category;
      next();
  } catch (error) {
      return res.status(400).json({ error: "Could not retrieve category" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.json(category);
  } catch (error) {
    res.status(404).json({ error: 'Category not found' });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeCategoryById = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id);
    res.json({ message: 'Category removed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeAllCategories = async (req, res) => {
  try {
    await Category.deleteMany({});
    res.json({ message: 'All categories removed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findCategoriesByName = async (req, res) => {
  const { name } = req.query;
  try {
    const categories = await Category.find({ name: { $regex: name, $options: 'i' } });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  categoryByID,
  getAllCategories,
  addCategory,
  getCategoryById,
  updateCategoryById,
  removeCategoryById,
  removeAllCategories,
  findCategoriesByName
};