import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-prime-forms',
  templateUrl: './prime-forms.component.html',
  styleUrls: ['./prime-forms.component.scss'],
})
export class PrimeFormsComponent implements OnInit {
  cities: City[] | undefined;
  selectedCity: City | undefined;
  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' },
  ];
  value: string = 'off';

  constructor(private primengConfig: PrimeNGConfig) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
