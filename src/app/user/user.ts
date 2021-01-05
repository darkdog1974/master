import { IUser } from "../interfaces/user";

export class User implements IUser {
key: string;
name: string;
lastname: string;
email: string;
fiscalCode: string;
idProvince: string;
birthDay: string;
age: number;
}