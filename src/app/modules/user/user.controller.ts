import { Request,Response,NextFunction } from "express";
import { createUserToDB, getAdminUsersFormDB, getUserByIdFromDB, getUsersFormDB } from "./user.service";

export const createUser=async(req: Request, res: Response, next: NextFunction) => {

    const data=req.body
    const user=await createUserToDB(data);
    res.status(200).json({
        status:'success',
        data:user
    })
};
export const getUser=async(req: Request, res: Response, next: NextFunction) => {
    const user=await getUsersFormDB();
    res.status(200).json({
        status:'success',
        data:user
    })
};

export const getUserById=async(req: Request, res: Response, next: NextFunction)=>{
    const {id}=req.params;
    const user=await getUserByIdFromDB(id);
    console.log("hitted form getUserById")
    res.status(200).json({
        status:'success',
        data:user
    })
}
export const getAdminUsers=async(req: Request, res: Response, next: NextFunction)=>{
    const user=await getAdminUsersFormDB();
    console.log("hitted form getadminusers")
    res.status(200).json({
        status:'success',
        data:user
    })
}
//route-->controller-->service