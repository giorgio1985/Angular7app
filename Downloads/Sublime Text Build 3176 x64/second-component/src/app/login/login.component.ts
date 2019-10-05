import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

logger = new Login();

loginForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
     this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

      get f() { return this.loginForm.controls; }

          onSubmit2() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        } else if(!this.loginForm.invalid) {

                this.logger.email = this.loginForm.value.email;
                this.logger.password = this.loginForm.value.password;

                console.log('your email:' + this.logger.email);
                console.log('your password: ' +  this.logger.password);

                alert('YOUR ARE LOGGED!!! :-)\n\n' + JSON.stringify(this.loginForm.value));

            this.router.navigateByUrl('/welcome');
        }



    }

}
