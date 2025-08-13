import { Component } from '@angular/core';

@Component({
  selector: 'app-third-component',
  imports: [],
  templateUrl: './third-component.html',
  styleUrl: './third-component.css'
})
export class ThirdComponent {
  imagem:string = "cs.png"
  imagem2:string = "js.png"

  alterarImagem(){
    if(this.imagem === "cs.png"){
      this.imagem = "cpp.png";
    } else {
      this.imagem = "cs.png"
    }
  }

  alterarImagem2(){
      if(this.imagem2 == "js.png"){
        this.imagem2 = "ts.png"
      } else {
        this.imagem2 = "js.png"
      }
  }

}
