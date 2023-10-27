import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { EmptyScreenComponent } from 'src/app/components/empty-screen/empty-screen.component';
import { RegisterMineComponent } from './register-mine/register-mine.component';
import { MaterialComponent } from './material/material.component';

@Component({
  selector: 'app-mines',
  templateUrl: './mines.component.html',
  styleUrls: ['./mines.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, EmptyScreenComponent, RegisterMineComponent, MaterialComponent]
})
export class MinesComponent  implements OnInit {
  minas: any[] = [
    { id: 1, nombre: 'Mina A', ubicacion: 'Ubicación A', capacidadProduccion: '10 toneladas/día', imagen: 'assets/mina1.jpg' },
    { id: 2, nombre: 'Mina B', ubicacion: 'Ubicación B', capacidadProduccion: '15 toneladas/día', imagen: 'assets/mina2.jpg' },
    // Agrega más minas según sea necesario.
  ];

  filteredMinas: any[] = [];
  searchTerm: string = '';
  
  constructor(
    private modalCtrl: ModalController
  ) { 
    this.filteredMinas = [...this.minas];
  }

  ngOnInit() {}

  searchMinas() {
    this.filteredMinas = this.minas.filter(mina =>
      mina.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  async verDetallesMina(minaId: number) {
    // Implementa la funcionalidad para ver detalles de una mina según el ID proporcionado.
    const modal = await this.modalCtrl.create({
      component: MaterialComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      //this.message = `Hello, ${data}!`;
    }
  }

  agregarMina() {
    // Implementa la funcionalidad para agregar una nueva mina.
  }

  reset(event) {

  }
}
