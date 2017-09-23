export class Item {
    private userUID: string;
    private msg: string;
    private date: Date;
    private time: Date;
    public isEditable: boolean;
    constructor(obj) {
        this.msg = obj.msg;
        this.date = obj.date;
        this.time = obj.time;
        this.userUID = obj.userUID;
        this.isEditable = false;
    }
    getUserId(obj) {
        return obj.userUID;
    }
    getMsg(obj) {
        return obj.msg;
    }
    getDate(obj) {
        return obj.date;
    }
    getTime(obj) {
        return obj.time;
    }
    set setIsEditable(val) {
        this.isEditable = val;
    }
}