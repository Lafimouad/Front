export class AdminInfo{
firstNameUser : string;
    lastNameUser : string;
    usernameUser : string;
    phoneNumberUser: string;
    emailAddressUser: string;
    dateBirthUser : string;
    addressUser: string;
    roleAdmin: string;
    constructor(firstname: string, lastname: string,username: string, email: string, phone:string, address:string , role:string ,birthdate : string) {
        this.firstNameUser = firstname;
        this.lastNameUser = lastname;
        this.usernameUser = username;
        this.emailAddressUser = email;
        this.phoneNumberUser = phone; 
        this.addressUser=address;
        this.roleAdmin=role;
        this.dateBirthUser=birthdate;
    }
}