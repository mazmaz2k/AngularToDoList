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
  constructor(private logReg: LogRegService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16)])
    });
  }

  register() {
    this.logReg.register(this.form.value.email, this.form.value.password).then(() => {
      this.router.navigate(['/login']);
    }).catch(() => {
      console.log('Email already in use');
    });
  }

  checkValid(name) {
    return (this.form.controls[name].invalid && this.form.controls[name].touched);
  }

}
