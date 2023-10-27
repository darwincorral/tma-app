import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MaterialComponent  implements OnInit {
  segment: string = 'lista'; // Establecer el segmento activo inicialmente
  materiales: any[] = []; // Aquí deberías cargar la lista de materiales desde tu fuente de datos
  nombreMaterial: string = '';
  cantidad: number;
  unidadMedida: string = 'Toneladas'; // Establecer una unidad de medida predeterminada
  filePreview;
  fileExtension;
  file = null;

  constructor() { }

  ngOnInit() {
    this.materiales =  [
      {
        nombre: 'Oro',
        precio: 50.0,
        unidadMedida: 'Kilogramos',
      },
      {
        nombre: 'Plata',
        precio: 30.0,
        unidadMedida: 'Kilogramos',
      },
      {
        nombre: 'Cobre',
        precio: 15.0,
        unidadMedida: 'Kilogramos',
      },
      {
        nombre: 'Hierro',
        precio: 10.0,
        unidadMedida: 'Kilogramos',
      },
      {
        nombre: 'Platino',
        precio: 60.0,
        unidadMedida: 'Kilogramos',
      },
    ]
  }

  buscarMaterial(event) {
    const searchTerm = event.target.value;
    // Implementa la búsqueda de materiales según el término de búsqueda (searchTerm)
    // y actualiza la lista de materiales (this.materiales).
  }

  registrarMaterial(formData) {
    const nuevoMaterial = {
      nombre: formData.nombreMaterial,
      precio: formData.precioMaterial,
      unidadMedida: formData.unidadMedida,
      // Agrega aquí la lógica para la fotografía si es necesario
    };
    // Implementa la lógica para registrar el nuevo material en tu fuente de datos.
  }


  handleFileInput(input: any) {
    const archivo = input.files[0];
    const allowedFileTypes = ['.jpg', '.jpeg', '.png'];
    this.fileExtension = archivo.name.toLowerCase().substring(archivo.name.lastIndexOf('.'));
  
    if (!allowedFileTypes.includes(this.fileExtension)) {
     // this.uiService.alertToastErrorMessage("Solo se permiten archivos de imagen y PDF.");
      return;
    }
  
    if(this.file && this.file['file'].name==archivo.name){
    //  this.uiService.alertToastErrorMessage("La imagen ya fue seleccionada, intente nuevamente");
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = (e: any) => {
      this.filePreview= reader.result;

      //this.subirAdjunto();
    };
  
    reader.onerror = function (error) {};
  
  }
}
