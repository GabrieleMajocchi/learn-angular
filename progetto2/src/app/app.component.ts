import { Component } from '@angular/core';

@Component({
  // --Nome del tag dove importeremo questo componente--
  selector: 'app-root',
  // --Il template del componente--
  templateUrl: './app.component.html',
  // --Lo stile del componente--
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progetto2';

  shareData = [
    {nome: "Gino", cognome: "Paoli", isOnline: true},
    {nome: "Marco", cognome: "Rossi", isOnline: false},
    {nome: "Maria", cognome: "Neri", isOnline: true},
  ]
}
