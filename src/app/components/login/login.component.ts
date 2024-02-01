import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';
  mensagemErro: string = '';

  fazerLogin() {
    // Adicione sua lógica de autenticação aqui
    if (this.usuario === 'DWU' && this.senha === 'DWU2023') {
      // Lógica de sucesso de login (pode redirecionar para outra página, por exemplo)
      console.log('Login bem-sucedido!');
    } else {
      this.mensagemErro = 'Usuário ou senha incorretos';
    }
  }
}