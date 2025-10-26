import express from "express";
const router=express.Router()
import {renameUserInfo,addNewAddress,renameAdress,deleteAddress} from '../controller/profile-controller.js'

import authenTokenCheck from "../middlware/authenTokenCheck.js";

router.use(authenTokenCheck)
router.put('/rename-user-info/:id',renameUserInfo)
router.post("/add-address/:id",addNewAddress)
router.put("/rename-address/:id/:addressID",renameAdress)
router.delete("/delete-address/:id/:addressID",deleteAddress)

module.exports=router