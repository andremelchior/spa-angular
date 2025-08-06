import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css'
})
export class FirstComponent {
  nome:string = "André";
  idade:number = 22;
}
