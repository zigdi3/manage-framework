import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { MopeButtonComponent } from '../shared/mope-button/mope-button.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren(MopeButtonComponent, { read: ElementRef })
  btn!: QueryList<Button>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    console.log('this.btn: ', this.btn);
  }


}
