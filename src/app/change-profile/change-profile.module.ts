import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeProfileComponent } from './change-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ChangeProfileComponent]
})
export class ChangeProfileModule { }
