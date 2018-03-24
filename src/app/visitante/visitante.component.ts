import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitante',
  templateUrl: './visitante.component.html',
  styleUrls: ['./visitante.component.css']
})
export class VisitanteComponent implements OnInit {

  jugadores:object[] = [
    {nombre:"Chris Paul",puntos: 0, imagen: "assets/Rockets/Paul.png"},
    {nombre:"James Harden",puntos: 0, imagen: "assets/Rockets/Harden.png"},
    {nombre:"Eric Gordon",puntos: 0, imagen: "assets/Rockets/Gordon.png"},
    {nombre:"Ryan Anderson",puntos: 0, imagen: "assets/Rockets/Anderson.png"},
    {nombre:"Nené Hilario",puntos:0, imagen: "assets/Rockets/Nene.png"},
    {nombre:"Trevor Ariza",puntos:0, imagen: "assets/Rockets/Ariza.png"},
    {nombre:"Clint Capela",puntos:0, imagen: "assets/Rockets/Capela.png"},
    {nombre:"Gerald Green",puntos:0, imagen: "assets/Rockets/Green.png"},
    {nombre:"Joe Johnson",puntos:0, imagen: "assets/Rockets/Johnson.png"},
    {nombre:"Tarik Black",puntos:0, imagen: "assets/Rockets/Black.png"},
    {nombre:"Brandan Wright",puntos:0, imagen: "assets/Rockets/Wright.png"},
    {nombre:"Mbah a Moute",puntos:0, imagen: "assets/Rockets/Mbah.png"},
    {nombre:"P.J. Tucker",puntos:0, imagen: "assets/Rockets/Tucker.png"},
    {nombre:"Markel Brown",puntos:0, imagen: "assets/Rockets/Brown.png"},
    {nombre:"Zhou Qi",puntos:0, imagen: "assets/Rockets/Qi.png"},
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
