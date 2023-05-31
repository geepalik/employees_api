import { Request, Response, NextFunction } from "express";
import {validationResult} from "express-validator";

const runValidation = (req: Request, res: Response, next: NextFunction) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        //post
        if(errors.array().length === 1){
            return res.status(422).json({
                message: errors.array()[0].msg
            });
        }else{
            //put
            const outputMessages: any[] = [];
            errors.array()
                .filter(errorMessage => errorMessage.msg !== "Invalid value")
                .forEach(errorMessage => outputMessages.push(errorMessage.msg));
            
            return res.status(422).json({
                message: outputMessages
            });
        }
    }
    next();
}

export default runValidation;