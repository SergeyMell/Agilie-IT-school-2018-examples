import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appModel]'
})
export class AppmodelDirective implements OnInit {

  constructor(private element: ElementRef) {}

  @Input() appModel: string;
  @Output() appModelChange = new EventEmitter<string>();

  ngOnInit() {
    this.element.nativeElement.value = this.appModel;
  }

  @HostListener('input')
  valueChanged() {
    this.appModelChange.emit(this.element.nativeElement.value);
  }

}
