import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Registers } from '../registers';



@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

     registerForm: FormGroup;
    submitted = false;
   // @Input() registers: Registers;
    register = new Registers();

    constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit() {
   this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        });
          
     
  }
     get f() { return this.registerForm.controls; }

          onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } else if (this.registerForm.value.password == this.registerForm.value.confirmPassword) {
            this.register.firstName = this.registerForm.value.firstName;
            this.register.secondName = this.registerForm.value.lastName;
            this.register.email = this.registerForm.value.email;
            this.register.password = this.registerForm.value.password;

                alert('SUCCESS!!! :-)\n\n' + JSON.stringify(this.registerForm.value));
                console.log('fistName: ' + this.register.firstName +'\n'+'Secondname: ' + this.register.secondName +'\n'+ 'email: ' + this.register.email +'\n'+ 'password: ' + this.register.password);
                let url = 'http://localhost:3000/signup';
              this.http.post<Registers>(url, this.registerForm.value).subscribe(data => {
                     console.log(data);
              });
               

           return this.router.navigateByUrl('/welcome');
        } else alert('An error accured!');



    }

}
