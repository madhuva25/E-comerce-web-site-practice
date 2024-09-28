 import express from 'express';
const router= express.Router();

import {signup} from "../controler/employeeauth.js";
import { login } from '../controler/employeeauth.js';
import {emplverfiction} from '../utils/authMiddleware.js';
import{getEmployeeuser } from '../controler/employeeauth.js'
//import {getemplId} from '../controler/employeeauth.js'
router.post('/signup',signup)
router.post('/login',login)
router.post('/',emplverfiction)
router.get('/username/:id',getEmployeeuser)


export default router;