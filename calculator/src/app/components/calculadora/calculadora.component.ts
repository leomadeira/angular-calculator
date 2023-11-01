import { Component } from '@angular/core';
import { CalculadoraService } from 'src/app/calculadora/services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  constructor(private calculadoraService: CalculadoraService){
    
  }
}
