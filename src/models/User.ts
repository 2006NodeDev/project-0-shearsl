import {Role} from "./Role";


//The User model keeps track of users information.
export class User {
  	userid: number; // primary key
	username: string; // not null, unique
	password: string; // not null
	firstname: string; // not null
	lastname: string; // not null
	email: string; // not null
	role: Role[]; // not null
}