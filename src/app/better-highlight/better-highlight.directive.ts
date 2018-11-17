import { Directive,OnInit, Renderer2 ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private eleRef:ElementRef,private renderr:Renderer2)
  {

  }
ngOnInit()
{
/* this.renderr.setStyle(this.eleRef.nativeElement,'background-color','blue');
this.renderr.setStyle(this.eleRef.nativeElement,'color','white');
this.renderr.setStyle(this.eleRef.nativeElement,'font-size','50px'); */
}
@HostListener('mouseclick') mouseclick(eventData:Event)
{
  this.renderr.setStyle(this.eleRef.nativeElement,'background-color','red');
  this.renderr.setStyle(this.eleRef.nativeElement,'font-size','50px')
  
}

@HostListener('mouseenter') mouseover(eventData:Event)
{
  this.renderr.setStyle(this.eleRef.nativeElement,'background-color','blue');
  this.renderr.setStyle(this.eleRef.nativeElement,'font-size','20px')
  
}
@HostListener('mouseleave') mouseleave(eventData:Event)
{
  this.renderr.setStyle(this.eleRef.nativeElement,'background-color','transparent');
  this.renderr.setStyle(this.eleRef.nativeElement,'font-size','')
}

}
