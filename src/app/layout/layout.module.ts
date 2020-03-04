import { NgModule } from '@angular/core';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { SharedModule } from '../shared/shared.module';

const components = [DefaultComponent, HeaderComponent];

@NgModule({
  declarations: [ ...components ],
  imports: [
    SharedModule
  ],
  exports: [ ...components ]
})
export class LayoutModule { }
