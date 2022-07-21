
/** attribute directive */
import { Directive, ElementRef, Input, ViewContainerRef, TemplateRef, OnInit, HostListener } from "@angular/core";

@Directive({
    selector: '[ttClass]'
})
export class ttClassDirective implements OnInit {
    @Input()
    ttClass!: string;
    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        this.el.nativeElement.classList.add(this.ttClass);
    }
}


/** 
 * in view 
 * use it link ngClass
 * <div [ttClass]="blue">....</div>
 */


/** structural directive */

@Directive({
    selector: '[ttIf]'
})


export class ttIfDirective implements OnInit {
    _ttif!: boolean;
    constructor(private _viewContainerRef: ViewContainerRef, private _templateRef: TemplateRef<any>) { }


    @Input()
    set ttIf(condition: any) {
        this._ttif = condition
        this._updateView();
    }

    _updateView() {
        if (this._ttif) {
            this._viewContainerRef.createEmbeddedView(this._templateRef)
        }
        else {
            this._viewContainerRef.clear()
        }
    }

    ngOnInit(): void {
    }
}



/** toggle directive */
@Directive({
    selector: '[ttToggle]',
})
export class ttToggleDirective {

    private elementSelected = false;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
    }

    @HostListener('click')
    private onClick() {
        console.log(this.elementSelected)
        this.elementSelected = !this.elementSelected;
        if (this.elementSelected) {
            this.el.nativeElement.classList.add('toggle')
        } else {
            this.el.nativeElement.classList.remove('toggle')
        }
    }

}
