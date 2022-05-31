import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateArrayPipe } from './paginate-array.pipe';

@NgModule({
  declarations: [PaginateArrayPipe],
  imports: [CommonModule],
  exports: [PaginateArrayPipe],
})
export class PaginateArrayModule {}
