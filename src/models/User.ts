import { UserDto } from "redux/UserAPI/types"


export interface UserDto {
    identity_id: string;
    email: string;
    first_name: string;
    last_name: string;
    org_id: number;
    org_name: string;
}


export default class User implements UserDto {
    public identity_id: string;
    public email: string;
    public first_name: string;
    public last_name: string;
    public org_id: number;
    public org_name: string;

    /* constructor(user?: UserDto) {
        if (user) {
            Object.keys(user).map((key: keyof UserDto) => {
                this[key] = user[key]
            })
        }
    } */
}