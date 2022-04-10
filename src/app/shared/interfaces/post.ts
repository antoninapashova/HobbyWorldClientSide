import { ICategory } from "./category";
import { IComment } from "./comment";
import { IPhoto } from "./photo";
import { IUser } from "./user";

export interface IPost{
    _id: number;
    title: string;
    description: string;
    photos: IPhoto[];
    user: IUser;
    comments: IComment[];
    category: ICategory;
     date: string;
}