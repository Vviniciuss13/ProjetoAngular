import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  
  num1:  any = '';
  operador: any = '';
  num2:  any = '';
  resultado: any = '';
  click: number = 0;

  select_number(event: any){
    if(this.resultado != ''){
      this.operador == '';
    }

    if(this.operador == ''){
      this.num1 = this.num1 + +(event.target.innerText);
    }else{
      this.num2 = this.num2 + +(event.target.innerText);
    }
  }

  select_sinal(event: any){
    if(this.operador == ''){
      this.num1 = +this.num1 * -1;
    }else{
      this.num2 = +this.num2 * -1;
    }
  }

  apagar_tudo(){
    this.num1 = '';
    this.num2 = '';
    this.operador = '';
    this.resultado = '';
  }

  apagar_atual(){
    if(this.operador == ''){
      this.num1 = '';
    }else{
      this.num2 = '';
    }
  }

  apagar_ultimo(){
    if(this.operador == ''){
      this.num1 = this.num1.slice(0, -1);
    }else{
      this.num2 = this.num2.slice(0, -1);
    }
  }

  select_operador(event: any){
    if(this.num1 == ''){
      this.num1 = '0';
    }
    
    if(this.resultado != ''){
      this.num1 = this.resultado;
      this.resultado = '';
      this.operador = (event.target.innerText);
    }else{
      this.operador = (event.target.innerText);
    }
    this.num2 = '';
  }

  op_resultado(){
    if(this.operador == '*'){
      if(this.resultado != ''){
        this.resultado = +this.resultado * +this.num2;
      }else{
        this.resultado = +this.num1 * +this.num2;
      }
    }else if(this.operador == '/'){
      if(this.resultado != ''){
        this.resultado = +this.resultado / +this.num2;
      }else{
        this.resultado = +this.num1 / +this.num2;
      }
    }else if(this.operador == '+'){
      if(this.resultado != ''){
        this.resultado = +this.resultado + +this.num2;
      }else{
        this.resultado = +this.num1 + +this.num2;
      }
    }else{
      if(this.resultado != ''){
        this.resultado = +this.resultado - +this.num2;
      }else{
        this.resultado = +this.num1 - +this.num2;
      }
    }
  }
}
