const express = require("express");
const router = express.Router(); // 🟢 FIXED: 'Router' should have a capital 'R'

const { protect } = require("../middlewears/authmidllewear"); // 🟢 FIXED: typo in folder and filename

const {
  registerUser,
  LoginUser,
  getUserProfile,      // 🟢 FIXED: function name should match exported function
  updateUserProfile
} = require("../controllers/authcontroller");

// 🟢 Routes
router.post("/register", registerUser);
router.post("/login", LoginUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

module.exports = router;
