import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateDirective } from './paginate.directive';

@NgModule({
  declarations: [PaginateDirective],
  imports: [CommonModule],
  exports: [PaginateDirective],
})
export class PaginateDirectiveModule {}
