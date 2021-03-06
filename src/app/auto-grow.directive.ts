import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[auto-grow]',
  host: {
    '(focus)' : 'onFocus()',
    '(blur)' : 'onBlur()'
  }
})
export class AutoGrow {

  constructor(private el: ElementRef, private renderer: Renderer) {}

  onFocus(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
  }

  onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '100px');
  }

}
