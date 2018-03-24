import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  jugadores:object[] = [
    {nombre:"Tony Parker",puntos: 0, imagen: "assets/Spurs/T-Parker.png"},
    {nombre:"Dany Green",puntos: 0, imagen: "assets/Spurs/D-Green.png"},
    {nombre:"Kawhi Leonard",puntos: 0, imagen: "assets/Spurs/K-Leonard.png"},
    {nombre:"LaMarcus Aldridge",puntos: 0, imagen: "assets/Spurs/Aldridge.png"},
    {nombre:"Pau Gasol",puntos:0, imagen: "assets/Spurs/P-Gasol.png"},
    {nombre:"Rudy Gay",puntos:0, imagen: "assets/Spurs/R-Gay.png"},
    {nombre:"Dejounte Murray",puntos:0, imagen: "assets/Spurs/D-Murray.png"},
    {nombre:"Bryn Forbes",puntos:0, imagen: "assets/Spurs/B-Forbes.png"},
    {nombre:"Joffrey Lauvergne",puntos:0, imagen: "assets/Spurs/J-Lauvergne.png"},
    {nombre:"Manu Ginobili",puntos:0, imagen: "assets/Spurs/Ginobili.png"},
    {nombre:"Patty Mills",puntos:0, imagen: "assets/Spurs/P-Mills.png"},
    {nombre:"Kyle Anderson",puntos:0, imagen: "assets/Spurs/K-Anderson.png"},
    {nombre:"Brandon Paul",puntos:0, imagen: "assets/Spurs/B-Paul.png"},
    {nombre:"Davis Bertans",puntos:0, imagen: "assets/Spurs/D-Bertans.png"},
    {nombre:"Derrick White",puntos:0, imagen: "assets/Spurs/D-White.png"},
  ]

  puntos:number = 0
  dobleDigito:string = "00"

  constructor() { }

  ngOnInit() {
  }

  recibePuntos(event){
    this.puntos = this.puntos + event
    if (this.puntos >= 100){
      this.dobleDigito = ("0" + this.puntos).slice(-3)
    } else {
    this.dobleDigito = ("0" + this.puntos).slice(-2)
    }
  }

}
