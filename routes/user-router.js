import express from "express";
import {userLogin,userRegistration} from '../controller/user-controller'
const router  = express.Router();

router.get('/userlogin/',userLogin)
router.post('/registerUser/',userRegistration)

export default router