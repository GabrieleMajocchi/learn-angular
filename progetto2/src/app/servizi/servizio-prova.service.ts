import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  constructor() { }

  testService = 'Service funzionante'

  persone = [
    {nome: "Gino", cognome: "Paoli", isOnline: true},
    {nome: "Marco", cognome: "Rossi", isOnline: false},
    {nome: "Maria", cognome: "Neri", isOnline: true},
  ]

  getPersone(){
    return this.persone
  }

  getPersona(index: number){
    return this.persone[index]
  }
}
