import { Component } from '@angular/core';
import {CdkMenuTrigger} from "@angular/cdk/menu";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CdkMenuTrigger,
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
