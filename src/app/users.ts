export class Users {
    private firstName: string;
    private lastName: string;
    private email: string;

    constructor(obj?) {
        this.firstName = obj.firstName || '';
        this.lastName = obj.lastName || '';
        this.email = obj.email || '';
    }
}
