export class Users {
    private _firstName: string;
    private _lastName: string;

    constructor(obj) {
        this._firstName = obj.firstName;
        this._lastName = obj.lastName;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    setFirstName(name: string) {
        this._firstName = name;
    }

    setLastName(name: string) {
        this._lastName = name;
    }
}
