import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'mp-panel',
  templateUrl: './mope-panel.component.html',
  styleUrls: ['./mope-panel.component.css']
})
export class MopePanelComponent implements OnInit {
@Input() header : string = 'PanelPanel';
@Input() toggle : boolean = true;
@Input() panelContent : string = 'Exemplo conteudo do panel';
@Input() styleClass : string = '';
@ViewChild('panel', { read: Panel}) mpPanel! : Panel;
collapsed : boolean = true;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('mpPanel after: ', this.mpPanel);
    this.mpPanel.collapsed= this.collapsed;
    this.mpPanel.header = 'PanelModificado'

  }

  ngAfterViewChecked(): void {
    console.log('mpPanel before: ', this.mpPanel);
    
  }
setContent(content :string){
  this.panelContent=content;

}
}
