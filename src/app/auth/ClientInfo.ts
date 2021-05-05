export class Client {
    idUser : string;
    phoneNumberUser : string ;
    lastNameUser: string;
    firstNameUser: string;
    usernameUser: string;
    emailAddressUser: string;
    passwordUser: string;
    addressUser: string;
    genderClient: string;
    workfieldClient : string;
    dateBirthUser : string;

    constructor(id : string ,firstname: string, lastname: string,username: string, email: string, password: string , phone:string, address:string , gender:string , workfield : string , birthdate : string) {
        this.idUser = id;
        this.firstNameUser = firstname;
        this.lastNameUser = lastname;
        this.usernameUser = username;
        this.emailAddressUser = email;
        this.passwordUser = password;
        this.phoneNumberUser = phone; 
        this.addressUser=address;
        this.genderClient=gender;
        this.workfieldClient=workfield;
        this.dateBirthUser=birthdate;
    }
}