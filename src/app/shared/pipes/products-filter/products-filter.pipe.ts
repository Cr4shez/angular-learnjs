import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../types/product';

@Pipe({
  name: 'ProductsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
  transform(
    value: IProduct[],
    searchString: string,
    ...args: unknown[]
  ): IProduct[] {
    console.log('Пришел массив', value);
    console.log(
      'Ушёл массив',
      value.filter((value) => value.name.includes(searchString))
    );
    return searchString
      ? value.filter((value) => value.name.includes(searchString))
      : value;
  }
}
