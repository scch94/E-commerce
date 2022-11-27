import { Router } from "express";
import { createUsers, deleteUsers, getUsers, updateUsers, getUser} from "../controller/users.controller.js";
const router=Router();

//create user
router.get('/users', getUsers)
router.post('/newUsers', createUsers)
router.put('/updateUsers/:id', updateUsers)
router.delete('/deleteUsers/:id', deleteUsers)
router.get('/user/:id', getUser)
export default router