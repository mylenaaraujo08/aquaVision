import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: L.Map;

  constructor(
    private router: Router
  ) { }

  goToPage(a: string):void{
    this.router.navigate([a]);
  };

  ngOnInit() {


  }
  ionViewDidEnter(){
    this.map = L.map('map').setView([-8.086734, -34.904810], 13);
    L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(this.map)

    const icone = L.icon({
      iconUrl: '/assets/img/icons/icon-map.png',
      iconSize:     [70, 70]
    });

    L.marker([-8.086734, -34.904810], {icon: icone}).addTo(this.map).bindPopup("<h1>Reservatório X</h1> <p>Braço do Rio Capibaribe</p> <a href=/informacoes><button>ABRIR</button></a>")
  }

}
