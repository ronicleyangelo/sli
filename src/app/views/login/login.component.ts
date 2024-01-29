import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { JavaService } from '../../service/java.service';
import { CommonModule } from '@angular/common';
import {MatButton} from "@angular/material/button";
import {JwtResponse} from "../../interface/jwt-response";
import {Auth} from "../../interface/auth";
import {AuthGuardService} from "../../service/auth/auth-guard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButton,
  ],
  providers:[JavaService, HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;

  imgURL = './assets/images/transferir.jpg'

  constructor(private auth: AuthGuardService, private fb: UntypedFormBuilder, private java: JavaService,
              private router: Router) {
    this.loginForm = this.fb.group({
      login: new UntypedFormControl("", [Validators.required]),
      senha: new UntypedFormControl("", [Validators.required])
    })
  }
  ngOnInit(): void {

  }

  login() {
    const { login, senha } = this.loginForm.value;

    const credentials: Auth = { login, senha};

    this.java.login(credentials).subscribe(
      (response: JwtResponse) => {
        this.router.navigate(['/menu'])
      },
      (error: HttpErrorResponse) => {
        console.error('Erro ao fazer login', error);
      }
    );

  }

}
