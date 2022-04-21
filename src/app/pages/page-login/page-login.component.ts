import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/components/loader/loader.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signIn() {
    if (this.loginForm.invalid) {
      //showError
      return;
    }

    this.loaderService.addLoaderCondition();

    const { email, password } = this.loginForm.value;

    const sendData = {
      email,
      password,
    }

    this.apiService.signInPostRequest(sendData).subscribe({
      complete: () => {
        this.loaderService.removeLoaderCondition();
        this.router.navigate(['']);
      },
      error: () => {
        this.loaderService.removeLoaderCondition();
      }
    });
  }

}
