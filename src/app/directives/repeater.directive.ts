import {Directive, DoCheck, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appRepeater][appRepeaterFrom]'
})
export class RepeaterDirective implements OnInit, DoCheck {

  object = {};

  @Input()
  set appRepeaterFrom(object) {
    this.object = object;
  };

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.render();
  }

  ngDoCheck() {
    this.render();
  }

  render() {
    this.containerRef.clear();
    for (const key in this.object) {
      if (this.object.hasOwnProperty(key)) {
        this.containerRef.createEmbeddedView(this.templateRef, {
          $implicit: this.object[key],
          key: key
        });
      }
    }

  }

}
