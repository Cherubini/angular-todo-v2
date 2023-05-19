import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPriorityBorder]'
})
export class PriorityBorderDirective {

  @Input() set appPriorityBorder(value: string){
    if(value==='1'){
      this.element.nativeElement.style.borderLeft='4px solid rgb(65, 252, 65)';
    }
    if(value==='2'){
      this.element.nativeElement.style.borderLeft='4px solid rgb(250, 190, 80)';
    }
    if(value==='3'){
      this.element.nativeElement.style.borderLeft='4px solid rgb(228, 0, 0)';
    }
   }

  constructor(private element: ElementRef) { }

}
