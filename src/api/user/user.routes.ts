import express, {Request, Response, Router} from "express";
import { UserController } from "./user.controller";
import { createUserValidator, updateUserValidator } from "./user.middleware";
import runValidation from "../../middleware/validators";

const userRoutes: Router = express.Router();

const userController = new UserController();

userRoutes.get('/users', (req: Request, res: Response) => {userController.getAllUsers(req, res)});
userRoutes.get('/users/:userId', (req: Request, res: Response) => {userController.getUserById(req, res)});
userRoutes.post('/user', createUserValidator, runValidation, (req: Request, res: Response) => {userController.createUser(req, res)});
userRoutes.put('/user', updateUserValidator, runValidation, (req: Request, res: Response) => {userController.updateUser(req, res)});
userRoutes.delete('/user/:userId', runValidation, (req: Request, res: Response) => {userController.deleteUser(req, res)});

export default userRoutes;