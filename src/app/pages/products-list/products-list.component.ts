import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { IProduct } from '../../shared/types/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  products!: IProduct[];
  images: string[] = [
    'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480',
    'https://swall.teahub.io/photos/small/21-218810_beautiful-wallpapers-download-for-mobile-download-beautiful-images.jpg',
  ];
  private _searchString!: string;
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

  set searchString(value: string) {
    this._searchString = value;
  }

  get searchString() {
    return this._searchString;
  }

  trackByName(index: number, product: IProduct) {
    return product.name;
  }
}
