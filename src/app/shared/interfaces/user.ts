import { IPost } from "./post";

export interface IUser{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    hobbies: IPost[];
}