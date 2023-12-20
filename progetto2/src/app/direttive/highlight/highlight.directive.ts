import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.cambiaColore('yellow')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.cambiaColore('transparent')
  }

  cambiaColore(colore: string){
    this.element.nativeElement.style.backgroundColor = colore
  }
}
