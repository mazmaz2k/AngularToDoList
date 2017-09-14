export class Item {
    private userUID: string;
    private msg: string;
    private date: string;

    constructor(obj) {
        this.msg = obj.msg;
        this.date = obj.date;
        this.userUID = obj.userUID;
    }
}
