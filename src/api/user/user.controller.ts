import { Request, Response } from "express";
import { BaseController } from "../../base/base.controller";
import { UserService } from "./user.service";
import { GetUserByIdDto } from "./dto/get-user-by-id.dto";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";

export class UserController extends BaseController{
    userService: UserService;

    constructor(){
        super();
        this.userService = new UserService();
    }

    async createUser(req: Request, res: Response){
        try{
            const {name, email, password} = req.body;
            const createUserDto: CreateUserDto = {name, email, password};
            const doc = await this.userService.createUser(createUserDto);
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async updateUser(req: Request, res: Response){
        try{
            const {userId, name, role, status} = req.body;
            const updateUserDto: UpdateUserDto = {userId, name, role, status};
            const doc = await this.userService.updateUser(updateUserDto);
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async deleteUser(req: Request, res: Response){
        try{
            const {userId} = req.params;
            const getUserByIdDto: GetUserByIdDto = {userId: parseInt(userId)};
            const doc = await this.userService.deleteUser(getUserByIdDto);
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async getAllUsers(req: Request, res: Response){
        try{
            const doc = await this.userService.getAllUsers();
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async getUserById(req: Request, res: Response){
        try{
            const {userId} = req.params;
            const getUserByIdDto: GetUserByIdDto = {userId: parseInt(userId)};
            const doc = await this.userService.getUserById(getUserByIdDto);
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }
}