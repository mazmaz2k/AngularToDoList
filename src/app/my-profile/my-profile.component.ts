import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2/database';
import { element } from 'protractor';
import { ToDoListComponent } from './../to-do-list/to-do-list.component';
import { Component, ViewChild , ElementRef, AfterViewInit} from '@angular/core';
import { UsersService } from './../users/users.service';
import { LogRegService } from './../log-reg.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from '../users';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent implements AfterViewInit {

  @ViewChild('firstNameInput') firstNameInput: ElementRef;
  @ViewChild('lastNameInput') lastNameInput: ElementRef;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });
  private _user: Observable<{_firstName, _lastName}>;

  constructor( private list: ToDoListComponent, private userServ: UsersService,  private logreg: LogRegService, private router: Router) {
    this._user = this.userServ.userData;
  }

  ngAfterViewInit() {
    this._user.subscribe(user => {
       this.firstNameInput.nativeElement.value = user._firstName;
       this.lastNameInput.nativeElement.value = user._lastName;
    });
  }

  update() {
    const user = new Users({
      firstName: this.form.controls['firstName'].value === '' ? this.firstNameInput.nativeElement.value : this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value === '' ? this.lastNameInput.nativeElement.value : this.form.controls['lastName'].value
    });
    this.userServ.setUserData(user, this.logreg.userUID);
    this.router.navigate(['/list']);
  }

  checkValid(name) {
    return (this.form.controls[name].invalid && this.form.controls[name].touched);
  }
}
