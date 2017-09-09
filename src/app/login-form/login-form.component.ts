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
  private logMsg: string;

  constructor(private fb: FormBuilder, private log: LogRegService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.logMsg = 'Please fill all the fields';
      return null;
    }
    this.log.login(this.form.value.email, this.form.value.password).then(() => {
       this.logMsg = 'Succesfully Loged In';
       this.router.navigate(['/list']);

      }).catch(() => {
      this.logMsg = 'Incorrect email or password';
    });
  }

}
