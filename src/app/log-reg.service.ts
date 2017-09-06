import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LogRegService {

  data;
  private path = `https://us-central1-todoapplicatoin.
  cloudfunctions.net/helloWorld.json`; // https://todoapplicatoin.firebaseio.com/data.json';

  constructor(private _http: Http) { }

  register() {
    // this._http.post(this.path, {email: 'admin@test.com', password: '123456'}).subscribe((res) => {

    // }, (error) => {
    //   console.log('error');
    // });

    this._http.get(this.path).subscribe((res) => {
      this.data = res;
      console.log('data', this.data);
    }, (error) => {
      console.log('error');
    });
  }
}
