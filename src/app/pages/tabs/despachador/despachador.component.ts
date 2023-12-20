import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-despachador',
  templateUrl: './despachador.component.html',
  styleUrls: ['./despachador.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DespachadorComponent  implements OnInit {
  entregas: any[] = [];

  constructor() { }

  ngOnInit() {
    this.entregas = [
      {
        puntoInicial: 'Mina A',
        puntoFinal: 'Planta de Procesamiento X',
        materialEnviado: 'Oro 10 Toneladas',
      },
      {
        puntoInicial: 'Mina B',
        puntoFinal: 'Planta de Procesamiento Y',
        materialEnviado: 'Plata 5 Toneladas',
      },
      {
        puntoInicial: 'Mina A',
        puntoFinal: 'Planta de Procesamiento Y',
        materialEnviado: 'Plata 5 Toneladas',
      },
      {
        puntoInicial: 'Mina B',
        puntoFinal: 'Planta de Procesamiento Y',
        materialEnviado: 'Plata 5 Toneladas',
      },
      // Agrega más entregas según tus datos
    ];
  }

}
