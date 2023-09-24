import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import { UserNotFoundComponent } from './components/user-not-found/user-not-found.component';
import { AboutAppComponent } from './components/about-app/about-app.component';

export const COMPONENTS = [UserNotFoundComponent, AboutAppComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: COMPONENTS,
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
