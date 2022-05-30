import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../types/product';

@Pipe({
  name: 'productsFilter',
})
export class productsFilter implements PipeTransform {
  transform(
    value: IProduct[],
    searchString: string,
    ...args: unknown[]
  ): IProduct[] {
    return searchString
      ? value.filter((value) => value.name.includes(searchString))
      : value;
  }
}
