import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from "./service/auth/auth-guard.service";
import {MenuComponent} from "./views/menu/menu.component";
import {NgModule} from "@angular/core";
import {UsuarioComponent} from "./views/usuario/usuario.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuardService] },
  { path: 'usuario', component: UsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService],
})

export class AppRoutingModule {}
