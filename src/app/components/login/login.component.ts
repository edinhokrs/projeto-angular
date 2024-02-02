import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();
  @Output() hideLogin: EventEmitter<void> = new EventEmitter<void>();

  usuario: string = '';
  senha: string = '';
  mensagemErro: string = '';

  fazerLogin() {
    if (this.usuario === 'DWU' && this.senha === 'DWU2023') {
      // Emitir evento de sucesso de login
      this.loginSuccess.emit();
      // Emitir evento para esconder a caixa de login
      this.hideLogin.emit();
    } else {
      this.mensagemErro = 'Usuário ou senha incorretos';
    }
  }
}