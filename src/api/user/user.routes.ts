import express, {Request, Response, Router} from "express";
import { UserController } from "./user.controller";

const userRoutes: Router = express.Router();

const userController = new UserController();

userRoutes.get('/users', (req: Request, res: Response) => {userController.getAllUsers(req, res)});
userRoutes.get('/users/:userId', (req: Request, res: Response) => {userController.getUserById(req, res)});

export default userRoutes;