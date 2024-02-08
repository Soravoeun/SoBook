import { Router } from "express";
import { allUsers, createUser, login } from "../controllers/userController";

export const userRouter = Router();

userRouter.get('/all', allUsers);
userRouter.post('/inscription', createUser);
userRouter.get('/login', login);

