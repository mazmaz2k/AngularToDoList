export class Item {
    private userUID: string;
    private msg: string;
    private date: string;
    private time: string;
    constructor(obj) {
        this.msg = obj.msg;
        this.date = obj.date;
        this.time = obj.time;
        this.userUID = obj.userUID;
    }
}
