const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuItem");

//API Routes for menu items here

// routes/menu.js

// ...

// Create a new menu item
router.post("/menu", async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    const savedMenuItem = await menuItem.save();
    res.json(savedMenuItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all menu items
router.get("/menu", async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
});

// Get a menu item by ID
router.get("/menu/:id", async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);
  if (menuItem) {
    res.json(menuItem);
  } else {
    res.status(404).json({ error: "Menu item not found" });
  }
});

// Update a menu item by ID
router.put("/menu/:id", async (req, res) => {
  try {
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedMenuItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a menu item by ID
router.delete("/menu/:id", async (req, res) => {
  await MenuItem.findByIdAndRemove(req.params.id);
  res.json({ message: "Menu item deleted" });
});

module.exports = router;
