import {Component} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {MatInput} from "@angular/material/input";
import {MatPaginator} from "@angular/material/paginator";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {JavaService} from "../../service/java.service";

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    MenuComponent,
    MatInput,
    MatPaginator,
    NgForOf,
    MatButton
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {
  searchPlaceholder = 'Pesquisar...';
  searchButtonLabel = 'Buscar';
  addUserButtonLabel = 'Adicionar Usuário';

  users = [
    {name: 'João Silva', email: 'joaosilva.com'},
    {name: 'Maria Oliveira', email: 'mariaoliveira.com'}
    // Adicione mais usuários conforme necessário
  ];

  totalItems = 100; // Substitua pelo total real de itens
  pageSize = 10;
  pageSizeOptions = [5, 10, 20];

  constructor(private javaService: JavaService) {
  }
  onSearchButtonClick() {
    console.log('Botão de busca clicado');
  }

  onAddUserButtonClick() {
    console.log('Botão de adicionar usuário clicado');
  }
}
