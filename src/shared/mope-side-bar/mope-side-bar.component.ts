import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

export interface sideBarOptions {
  icon: string,
  position: string,
}
@Component({
  selector: 'mp-mope-side-bar',
  templateUrl: './mope-side-bar.component.html',
  styleUrls: ['./mope-side-bar.component.css']
})
export class MopeSidebarComponent implements OnInit {
  @Input() position: string = "left";
  @Input() sidebarVisible: boolean = false;
  @Input() styleClass: string = "";

  @ViewChild('sideBar1', { read: Sidebar }) mpSideBar!: Sidebar;
  @Input() orientation: sideBarOptions[] = [
    {
      icon: "pi pi-arrow-top",
      position: "bottom",
    },
    {
      icon: "pi pi-arrow-right",
      position: "left",
    },
    {
      icon: "pi pi-arrow-bottom",
      position: "top",
    },
    {
      icon: "pi pi-arrow-left",
      position: "right",
    },
  ];
  @Input() selectedPosition: sideBarOptions; 
  
  constructor() {
    this.selectedPosition = this.orientation[1];

  }

  ngOnInit() {

  }
  ngAfterContentInit() {
  }
}
