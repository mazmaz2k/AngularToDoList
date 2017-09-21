
export class Item {
    private userUID: string;
    private msg: string;
    private date: Date;
    private time: Date;
    constructor(obj) {
        this.msg = obj.msg;
        this.date = obj.date;
        this.time = obj.time;
        this.userUID = obj.userUID;
    }
}
