import { Request, Response } from "express";
import { BaseController } from "../../base/base.controller";
import { UserService } from "./user.service";
import { GetUserByIdDto } from "./dto/get-user-by-id.dto";

export class UserController extends BaseController{
    userService: UserService;

    constructor(){
        super();
        this.userService = new UserService();
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
            const getUserByIdDto: GetUserByIdDto = {userId};
            const doc = await this.userService.getUserById(getUserByIdDto);
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }
}