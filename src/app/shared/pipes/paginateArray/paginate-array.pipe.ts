import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PaginateArray',
})
export class PaginateArrayPipe<T> implements PipeTransform {
  // пайп не хочет типизировать дженерик!!! "функция возвращает unknown[][]" если в Array поставить T[] вместо any[]
  transform(
    value: T[],
    batchSize: number = 3,
    ...args: unknown[]
  ): Array<any[]> {
    console.log('Пришел массив', value);
    let result = value.reduce(
      (groupedItems: Array<T[]>, item: T) => {
        const lastGroupIdx = groupedItems.length - 1;
        const lastGroup = groupedItems[lastGroupIdx];
        const subArrayHasSpace = lastGroup.length < batchSize;

        subArrayHasSpace ? lastGroup.push(item) : groupedItems.push([item]);

        return groupedItems;
      },
      [[]]
    );
    console.log('Ушёл массив', result);
    return result;
  }
}
