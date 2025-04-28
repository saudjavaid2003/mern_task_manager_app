const express=require("express")
const router=express.router()
router.post("/register",registerUser);
router.post("/login",LoginUser);
router.get("/profile",protect,getUserProfile);
router.put("/profile",protect,updateUserProfile);
module.exports=router
