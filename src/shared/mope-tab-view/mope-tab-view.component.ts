import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TabView } from 'primeng/tabview';

export interface IMopeTabView {
  header: string;
  content: string;
  icon: string,
}

@Component({
  selector: 'mp-tab-view',
  templateUrl: './mope-tab-view.component.html',
  styleUrls: ['./mope-tab-view.component.css']
})
export class MopeTabViewComponent implements OnInit {
  @Input() closeable: boolean = true;
  @Input() selected: boolean = true;
  @Input() styleClass: string = "";

  @ViewChild('tabView', { read: TabView }) mpTabView!: TabView;
  @Input() tabs: IMopeTabView[] = [
    { header: "Cabecalho 1", content: "Conteudo 1", icon: "" },
    {
      header: "Cabecalho 2",
      content: "Conteudo 2",
      icon: "pi pi-fw pi-home",
    }
  ];

  constructor() {

  }

  ngOnInit() {
    this.tabs[0].header = "Header mudou";
  }

  ngAfterViewInit(): void {
    console.log("mpTabview: ", this.mpTabView.tabs);
    for (let i of this.mpTabView.tabs) {
      i.closable = true;
    }
    this.mpTabView.tabs[0]._header = "header modificada";
    //       this.mpTabView.tabs[1]._leftIcon="pi pi-fw pi-home";
  }

}
