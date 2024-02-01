// form.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  dados = {
    nome: '',
    sobrenome: '',
    idade: null,
    sexo: 'N',
    dataNascimento: ''
  };

  salvarDados() {
    console.log('Dados salvos:', this.dados);
  }
}