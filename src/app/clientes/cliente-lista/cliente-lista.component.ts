import { Component, OnInit, Input } from '@angular/core';

import { Cliente } from '../cliente.model'

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

   @Input () clientes: Cliente[] = []

  // clientes = [
  //   {
  //     nome: "José",
  //     fone: "11223344",
  //     email: "jose@email.com"
  //   },
  //   {
  //     nome: "Maria",
  //     fone: "44774477",
  //     email: "maria@email.com"
  //   }
  // ]


  constructor() { }

  ngOnInit(): void {
  }

}
