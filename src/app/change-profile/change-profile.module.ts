import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeProfileComponent } from './change-profile.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [ChangeProfileComponent],
})
export class ChangeProfileModule {}
