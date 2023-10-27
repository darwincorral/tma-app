import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-register-mine',
  templateUrl: './register-mine.component.html',
  styleUrls: ['./register-mine.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterMineComponent  implements OnInit {

  nombre: string = '';
  capacidadProduccion: string = '';
  ubicacion: any;
  autocompleteResults: any[] = [];
  map: any;
  ubicacionSelected:string = '';
  latitud: number;
  longitud: number;
  marker: any;

  constructor() { }

  ngOnInit() {
  }

 

  agregarMina(formData) {
    // Implementa la funcionalidad para agregar la mina con los datos del formulario.
    // Puedes utilizar formData.nombre, formData.capacidadProduccion y formData.ubicacion.
  }


  buscarUbicacion(event) {
    const search = event.target.value;

    if (search  && search.trim().length > 3) { 
      // Llama a la función para buscar lugares y mostrar resultados de autocompletado
    this.buscarLugares(search)
    .then((predictions: any) => {
      this.autocompleteResults = predictions;
    })
    .catch((error) => {
      console.error(error);
    });
    } else {
      this.autocompleteResults = [];
      this.ubicacionSelected = '';
    }
   
  }

  buscarLugares(search: string) {
    return new Promise((resolve, reject) => {
      const service = new google.maps.places.AutocompleteService();
      service.getPlacePredictions({ input: search }, (predictions) => {
        resolve(predictions);
      }, (error) => {
        reject(error);
      });
    });
  }

  seleccionarUbicacion(place) {
    this.ubicacion = place.description;
    this.autocompleteResults = [];
    this.ubicacionSelected = place.description; 
    // Llama a la función para mostrar la ubicación en el mapa
    this.mostrarUbicacionEnMapa(place.description);
  }

  mostrarUbicacionEnMapa(ubicacion) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: ubicacion }, (results, status) => {
      if (status === 'OK' && results[0] && results[0].geometry) {
        const location = results[0].geometry.location;

        if (this.map) {
          this.map.panTo(location);

          // Actualiza el marcador y la latitud/longitud
          if (this.marker) {
            this.marker.setMap(null); // Elimina el marcador existente
          }
          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
          });

          // Actualiza la latitud y longitud
          this.latitud = location.lat();
          this.longitud = location.lng();
        } else {
          this.map = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 15, // Puedes ajustar el nivel de zoom
            streetViewControl: false, // Oculta el control de Street View
            mapTypeControl: false, // Oculta el control de Mapa/Satélite
            zoomControl: false, // Oculta el control de zoom
            fullscreenControl: false, // Oculta el control de pantalla completa
          });

          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
          });

          this.latitud = location.lat();
          this.longitud = location.lng();
          console.log('latitud',this.latitud)
          console.log('longitud',this.longitud)
        }
      }
    });
  }


}
