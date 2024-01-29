import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate() : boolean {
    if (localStorage.getItem('token')) {
      console.log("usuario autenticado")
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log("usuario nao atenticado")
      return false;
    }
  }
}
