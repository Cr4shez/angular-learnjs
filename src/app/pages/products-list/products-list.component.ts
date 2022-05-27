import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

interface IProduct {
  name: string;
  feedbacksCount?: number;
  images?: any[];
  price?: number;
  rating?: number;
  status?: number;
  subCategory?: string;
  _id?: string;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  products!: IProduct[];
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.products = [
      { name: 'product 1' },
      { name: 'product 2' },
      { name: 'product 3' },
      { name: 'product 4' },
      { name: 'product 5' },
      { name: 'product 6' },
      { name: 'product 7' },
      { name: 'product 8' },
    ];
    this.changeDetectorRef.markForCheck();
  }

  trackByName(index: number, product: IProduct) {
    return product.name;
  }
}
