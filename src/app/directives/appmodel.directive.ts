import {Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appModel]'
})
export class AppmodelDirective implements OnInit, OnChanges {

  constructor(private element: ElementRef) {}

  @Input() appModel: string;
  @Output() appModelChange = new EventEmitter<string>();

  ngOnInit() {
    this.element.nativeElement.value = this.appModel;
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.element.nativeElement.value = changes.appModel.currentValue;
    if ('appModel' in changes) {
      this.ngOnInit();
    }
  }

  @HostListener('input')
  valueChanged() {
    this.appModelChange.emit(this.element.nativeElement.value);
  }

}
