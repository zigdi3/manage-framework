import { NgModule } from '@angular/core';
import { ButtonCustomComponent } from './button/button-custom.component';
import { ButtonModule} from 'primeng/button'


@NgModule({
  declarations: [
    ButtonCustomComponent
  ],
  imports: [ 
    ButtonModule,
  ],
  exports: [
    ButtonCustomComponent
  ]
})
export class PrimengCustomModule { }
