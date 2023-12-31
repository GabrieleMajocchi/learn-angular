import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  // --Nome del tag dove importeremo questo componente--
  selector: 'app-root',
  // --Il template del componente--
  templateUrl: './app.component.html',
  // --Lo stile del componente--
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  // --Mettiamo ! dopo inputSaluti per garantire che non sia null o undefined altrimenti ElementRef ci darebbe errore--
  @ViewChild('inputValue') inputSaluti!: ElementRef<HTMLInputElement>

  title = 'corso angular';

  shareData = [
    {nome: "Gino", cognome: "Paoli", isOnline: true},
    {nome: "Marco", cognome: "Rossi", isOnline: false},
    {nome: "Maria", cognome: "Neri", isOnline: true},
  ]

  colore = ''

  numero = 5

  today = Date.now()

  // --Dopo la view init andiamo a consol loggare il contenuto di inputSaluti--
  ngAfterViewInit(): void {
    console.log(this.inputSaluti)
  }
  // --Funzione che console logga la value del nativeElement dentro inputSaluti--
  onClick(){
    console.log(this.inputSaluti.nativeElement.value)
  }

  recivedData(value: string){
    console.log(value)
  }
}
