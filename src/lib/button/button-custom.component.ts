import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: 'buttom-custom.component.html',
  styles: [
  ]
})
export class ButtonCustomComponent {
  @Input() disabled: boolean=false;
  @Input() icon: string = "pi pi-fw pi-save";
  @Input() label: string = "save";
  @Input() styleClass : string = "pb-2 flex align-items-center justify-content-center";


  // Event emitter for click event
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();


}
