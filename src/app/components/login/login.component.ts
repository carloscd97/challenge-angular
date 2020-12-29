import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { ILoginViewModel } from 'src/app/core/viewmodels/ILoginViewModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  singupForm: FormGroup;
  public imagePath;
  public message: string;
  public isLoading: boolean = false;

  constructor(private _builderForm: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.singupForm = this._builderForm.group({
      username: ['', Validators.compose([Validators.maxLength(1000), Validators.minLength(3), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(1000), Validators.minLength(3), Validators.required])]
    });
  }


  ngOnInit(): void {
  }

  signIn(values: FormGroup) {
    this.isLoading = true;
    let loginViewModel: ILoginViewModel = values.value;
    this.authenticationService.login(loginViewModel).subscribe(auth => {
      console.log(auth.username);
      localStorage.setItem('fullName', auth.username);
      localStorage.setItem('token', auth.token);
      this.router.navigateByUrl('/currencyexchange');
      this.isLoading = false;
    });
  }

}
