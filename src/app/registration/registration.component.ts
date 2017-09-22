import { UsersService } from './../users/users.service';
import { Users } from './../users';
import { LogRegService } from './../log-reg.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  form: FormGroup;
  constructor(private logReg: LogRegService, private router: Router, private userService: UsersService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\(.[A-Za-z]{1,63}$)+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)])
    });
  }

  register() {
    this.logReg.register(this.form.value.email, this.form.value.password).then((res) => {
      console.log(res);
      const user = new Users({
        firstName: this.form.controls['firstName'].value,
        lastName: this.form.controls['lastName'].value,
        email: this.form.controls['email'].value
      });
      this.userService.addNewUser(user, res.uid);
      this.router.navigate(['/list']);
    }).catch((error) => {
      console.log(error);
    });
  }

  checkValid(name) {
    return (this.form.controls[name].invalid && this.form.controls[name].touched);
  }

  checkPassword(pass1, pass2) {
    // console.log('dasdsa', pass1.value);
    // return (pass1==p);
    if ( !(pass1.value === pass2.value)) {
        this.form.controls['repeatPassword'].setErrors({notMatch: true}) ;
        return true;
      }
      return false;
  }

}
