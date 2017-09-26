export class Item {
    private userUID: string;
    private msg: string;
    public date: Date;
    private time: Date;
    public isEditable: boolean;
    public toSec: number;
    public wasNotified: boolean;
    public timePassed: boolean;
    
    constructor(obj) {
        this.msg = obj.msg;
        this.date = obj.date;
        this.time = obj.time;
        this.userUID = obj.userUID;
        this.isEditable = false;
        this.toSec = obj.toSec;
        this.wasNotified = false;
        this.timePassed = false;
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
