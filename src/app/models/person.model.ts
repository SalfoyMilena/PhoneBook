import { picture } from './picture.model';
import { Name } from "./name.model";
import { location } from "./location.model";

export class Person {
    name:Name;
    email:string;
    picture:picture;
    location:location;
    login:login;
}
class login{
    uuid:string;
}
