import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [CardComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CardComponent, ReactiveFormsModule, FormsModule, HeaderComponent],
})
export class SharedModule {}
