import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productsFilter } from './products-filter.pipe';

@NgModule({
  declarations: [productsFilter],
  imports: [CommonModule],
  exports: [productsFilter],
})
export class productsFilterModule {}
