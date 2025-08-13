import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  imports: [],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css'
})

export class SecondComponent {
  a:number = 0; 
  b:number = 0; 
  op:string = ""; 
  resultado: any;

  //Função Mensagem
  mensagem(){
    alert('Olá, mundo!');
  }

  soma(a:number, b:number){
    return a + b;
  }

  subtracao(a:number, b:number){
    return a - b;
  }

  multiplicacao(a:number, b:number){
    return a * b;
  }

  divisao(a:number, b:number){
    return a / b;
  }

  exponenciacao(a:number, b:number){
    return a ** b;
  }

  calcular(x:number, y:number, op:string){
    switch(op){
      case "+":
        return this.soma(x, y);
      case "-":
        return this.subtracao(x, y);
      case "*":
        return this.multiplicacao(x, y);
      case "/":
        return this.divisao(x, y);
      default:
        return 0;
    }
  }

  calculadoraWindow(){
    alert("Calculadora em Angular")
    let x = Number(prompt("Digite o primeiro número: "));
    let y = Number(prompt("Digite o segundo número: "));
    let op = String(prompt("Digite a operação: "));

    this.calcular(x, y, op)
    
  }

    
  calculadoraDOM(){

    this.a = Number((<HTMLInputElement>document.querySelector("#n1")).value);
    this.b = Number((<HTMLInputElement>document.querySelector("#n2")).value);
    this.op = (<HTMLInputElement>document.querySelector("#op")).value;
    if(this.a && this.b && this.op){

      let resultado:number = this.calcular(Number(this.a), Number(this.a), String(this.a));

      alert(String(resultado));
    }

    
  }

}
