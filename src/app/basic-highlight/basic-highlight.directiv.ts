import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})

export class BasciHighlightDirective implements OnInit
{
    constructor(private elementRef:ElementRef)
    {

    }
    ngOnInit()
    {
            this.elementRef.nativeElement.style.backgroundColor='green';
            this.elementRef.nativeElement.style.color='white';
            
    }
}