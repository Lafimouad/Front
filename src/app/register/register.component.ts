import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SignUpInfo } from '../auth/SignUpInfo';
import { Order } from '../models/order';
import { OrderService } from '../MouadhServices/order.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  private signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  order:Order=new Order();

  constructor(private authService: AuthService,private orderservice:OrderService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.firstname,
      this.form.lastname,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.phone,
      this.form.address, 
      this.form.gender,
      this.form.workfield,
      this.form.dateofbirth
      );

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}