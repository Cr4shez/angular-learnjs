import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductCardComponent } from './product-card/product-card.component';
import { InputModule } from '../../components/input/input.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GalleryModule } from '../../shared/directives/gallery/gallery.module';
import { ProductsFilterModule } from '../../shared/pipes/products-filter/products-filter.module';
import { PaginateArrayModule } from '../../shared/pipes/paginateArray/paginate-array.module';
import { PaginateDirectiveModule } from '../../shared/directives/paginate/paginate.module';

@NgModule({
  declarations: [ProductsListComponent, ProductCardComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    InputModule,
    MatIconModule,
    MatButtonModule,
    GalleryModule,
    ProductsFilterModule,
    PaginateArrayModule,
    PaginateDirectiveModule,
  ],
  exports: [ProductsListComponent],
})
export class ProductsListModule {}
