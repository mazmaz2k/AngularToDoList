export class Item {
    private userUID: string;
    private msg: string;
    public date: Date;
    private time: Date;
    public isEditable: boolean;
    constructor(obj) {
        this.msg = obj.msg;
        this.date = obj.date;
        this.time = obj.time;
        this.userUID = obj.userUID;
        this.isEditable = false;
    }
    get getUserId() {
        return this.userUID;
    }
    get getMsg() {
        return this.msg;
    }
    get getDate() {
        return this.date;
    }
    get getTime() {
        return this.time;
    }
    set setIsEditable(val) {
        this.isEditable = val;
    }
}
