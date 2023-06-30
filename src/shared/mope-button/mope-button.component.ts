import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'mp-button',
  templateUrl: './mope-button.component.html',
  styleUrls: ['./mope-button.component.scss'],
})
export class MopeButtonComponent implements OnInit {
  // @ViewChild('btn', { read: ViewContainerRef }) mpButton!: ViewContainerRef;
  @ViewChild('btn', { read: Button }) mpButton!: Button;
  @Input() disabled: boolean = false;
  @Input() icon: string = 'pi pi-fw pi-save';
  @Input() label: string = 'save';
  @Input() styleClass: string = '';
  @Input() instanceId: number = 0;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private renderer: Renderer2,
    private _viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log('mpBtn after: ', this.mpButton);
    
  }

  changeButton() {
    this.mpButton.disabled = true;
    if (this.instanceId == 1) {
      // this.renderer.setAttribute();
    }

    console.log(this.instanceId);

    alert('Mudar botão!');
  }
}
