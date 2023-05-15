import { HydratedDocument } from "mongoose";
import { Model } from "mongoose";

export interface IUser{
    id:string;
    role:'student';
    password:string;
    name:{
        firstName:string,
        middleName:string,
        lastName:string
    }
    dateOfBirth?:string;
    gender:"male" | "female";
    email?:string;
    contactNo:string;
    emegencyContactNo:string;
    presentAddress:string;
    parmanentAddress:string;
  }

  
  //intance ,ethod
  export interface IUserMethods {
      fullName(): string;
    }

    //static
   export interface UserModel extends Model<IUser, {}, IUserMethods> {
      getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
    }