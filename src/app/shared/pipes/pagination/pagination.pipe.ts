import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe<T> implements PipeTransform {
  transform(value: T[], ...args: unknown[]): Array<T[]> {
    return value.reduce(
      (groupedItems: Array<T[]>, item: T) => {
        const lastGroupIdx = groupedItems.length - 1;
        const lastGroup = groupedItems[lastGroupIdx];

        if (lastGroup.length < 3) {
          lastGroup.push(item);
          return groupedItems;
        }
        return [...groupedItems, [item]];
      },
      [[]]
    );
  }
}
