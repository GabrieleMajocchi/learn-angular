import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy{

  cani = [
    {nome: 'roger',
    razza: 'golden retriver',
    descrizione:`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`}
  ]

  isDisabled = false
  img = ''
  img1 = 'https://statickodami.akamaized.net/wp-content/uploads/sites/31/2021/08/iStock-1267935446.jpg?im=AspectCrop=(16,9);'
  img2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  title = 'Titolo'
  // --Variabili per ngIf--
  isVisible = true
  isVisible2 = false
  // --array per ngFor--
  persone = [
    {nome: "Gino", cognome: "Paoli"},
    {nome: "Marco", cognome: "Rossi"},
    {nome: "Maria", cognome: "Neri"},
  ]

  // --Variabile per ngSwitch--
  numeroSwitch = 3
  testoSwitch = 'due'

  // --Funzione da associare all'event binding (click)--
  logClick(e: any){
    console.log(e)
  }

  // --Funzione chiamata dall'input--
  onInput(event: Event){
    // --Facciamo il casting dicendo che il target dell'evento è un elemento di input HTML--
    // --Serve dato che abbiamo dichiarato event: Event quindi non andiamo più a prendere any ma solo un determinato tipo--
    console.log( (<HTMLInputElement>event.target).value)
  }

  // --Funzione chiamata dal click del pulsante--
  onClick(event: Event){
    this.title = 'ho cliccato sul bottone'
  }

  constructor() {
    console.log("costruttore")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
    // --Ogni 2 secondi cambia isDisabled--
    // --Ogni 2 secondi counter aumenta di 1 e viene eseguito l'if che controlla se il numero è divisibile per 3 o meno
    // in base al risultato andrà a mostrare img1 o img2--
    let counter = 0
    setInterval(()=>{
      this.isDisabled = !this.isDisabled

      if(counter%3 == 0){
        this.img = this.img1
      }else{
        this.img = this.img2
      }
      counter++
    }, 2000)
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

}
