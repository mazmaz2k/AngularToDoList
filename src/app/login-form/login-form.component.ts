import { UsersService } from './../users/users.service';
import { Users } from './../users';
import { LogRegService } from './../log-reg.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;
  private _logMsg: string;

  constructor(private fb: FormBuilder, private _log: LogRegService, private router: Router, private route: ActivatedRoute,
     private users: UsersService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\(.[A-Za-z]{1,63}$)+')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this._logMsg = 'Please fill all the fields';
      return null;
    }
    this._log.login(this.form.value.email, this.form.value.password).then(
      success => {
       this.router.navigate(['/list']);

      }, error => {
        this._logMsg = error.message;
      });
  }
  get log() {
    return this._log;
  }

  get logMsg() {
    return this._logMsg;
  }
}
