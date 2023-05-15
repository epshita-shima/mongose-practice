import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB=async(payload:IUser):Promise<IUser>=>{
    const user =await new User(payload);
      await user.save();
      user.fullName() //custon intance

      return user

}

export const getUsersFormDB=async():Promise<IUser[]>=>{
    const users=await User.find();

    return users
}

export const getUserByIdFromDB=async(payload:string):Promise<IUser | null>=>{
    const user=await User.findOne({id:payload},{name:1})
    return user
}

export const getAdminUsersFormDB=async()=>{
    const admins=await User.getAdminUsers();
    return admins
}