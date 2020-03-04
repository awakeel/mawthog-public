
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
const MatModules = [ MatToolbarModule, ReactiveFormsModule, FormsModule, RouterModule, MatMenuModule, MatIconModule,MatButtonModule    ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MatModules
  ],
  exports: [ ...MatModules,CommonModule ]
})
export class SharedModule { }
