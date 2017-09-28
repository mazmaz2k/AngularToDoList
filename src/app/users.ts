export class Users {
    private _firstName: string;
    private _lastName: string;
    private _logedIn: boolean;

    constructor(obj) {
        this._firstName = obj.firstName;
        this._lastName = obj.lastName;
        this._logedIn = false;
    }

    get firstName() {
        return this._firstName;
    }

    get logedIn(){
        return this._logedIn;
    }
    get lastName() {
        return this._lastName;
    }

    set setFirstName(name: string) {
        this._firstName = name;
    }

    set setLastName(name: string) {
        this._lastName = name;
    }
    set logedIn(logged: boolean){
        this._logedIn = logged;
    }
}
