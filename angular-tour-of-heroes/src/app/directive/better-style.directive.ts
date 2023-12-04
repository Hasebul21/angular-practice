import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterStyle]'
})
export class BetterStyleDirective implements OnInit{

  constructor(private eleRef : ElementRef,
              private render : Renderer2) { }
              
  ngOnInit(): void {
    this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'green');
  }

}
