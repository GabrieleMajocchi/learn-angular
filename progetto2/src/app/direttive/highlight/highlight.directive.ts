import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = ''
  @Input() defaultHighlight = ''

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.cambiaColore(this.appHighlight || this.defaultHighlight)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.cambiaColore('transparent')
  }

  cambiaColore(colore: string){
    this.element.nativeElement.style.backgroundColor = colore
  }
}
