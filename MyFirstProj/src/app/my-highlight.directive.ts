import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
		this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');   
   }

  ngOnInit(){
   
  }

}
