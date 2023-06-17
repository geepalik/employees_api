import { Request, Response } from "express";

const outputHttpRequest = (req: Request, res: Response) => {
    if(res.locals.doc){
        return res.status(200).json(res.locals.doc)
    }
    if(res.locals.errorData){
        const {status, message, originalMessage} = res.locals.errorData;
        if(process.env.NODE_ENV === "development"){
            return res.status(status).json({error: message, details: originalMessage});
        }else{
            return res.status(status).json({error: message});
        }
    }
    return res.status(400).json({error: 'Unknown parameters'})
}

export default outputHttpRequest;