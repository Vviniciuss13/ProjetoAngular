import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  
  num1:  any = '';
  operador: any = '';
  num2:  any = '';

  select_number(event: any){
    if(this.operador == ''){
      this.num1 = this.num1 + (event.target.innerText);
    }else{
      this.num2 = this.num2 + (event.target.innerText);
    }
  }

  apagar_tudo(){
    this.num1 = '';
    this.num2 = '';
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
    this.operador == (event.target.innerText);
  }
}
