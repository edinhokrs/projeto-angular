import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoginSuccessful: boolean = false;
  showLoginBox: boolean = true;

  onLoginSuccess() {
    // Lógica de validação bem-sucedida do login aqui
    // Pode ser uma verificação simples de credenciais ou uma chamada de serviço para autenticação

    // Exemplo de lógica de autenticação simples
    this.isLoginSuccessful = true;
    // Esconder a caixa de login
    this.showLoginBox = false;
  }

  hideLoginBox() {
    // Método para ser chamado quando o evento hideLogin for emitido
    this.showLoginBox = false;
  }
}