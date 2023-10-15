import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private loginService : LoginService, private router : Router){}
    
    mensagemok = "Deu certo!"
    mensagemERRO = " "
    dicas = ''
   

    // Instanciando uma classe:
    userModel = new User()

    onSubmit(){
      // O subscribe é um operador do Observable.Ao usar ele, estamos falando que, assim que nossa requisição for realizada e nosso texto se transformar em JSON, seremos notificados, e além disso, receberemos as informações do usuários. Esse cara faz tudo de forma rápida e unidimencional. 

// Estaremos renderizando de forma condicional, isto é, algo será mostrado na dela, se erro:
// O método .subscribe permite que você observe os resultados da solicitação.
      this.loginService.login(this.userModel).subscribe((response) => {
        // Se ok:
        console.log(this.mensagemok)
        this.router.navigateByUrl("/")
      },(respErro) => {
        // Se erro:
        this.mensagemERRO = respErro.error
// Caso seja interessante:
        if(this.mensagemERRO == 'Password is too short'){
          this.mensagemERRO = "A senha está muitooo pequena!"
          this.dicas = " Utilize mais de três caractéres"
        }else{
          this.dicas = ""
        }
      })
    }
  
}



  

