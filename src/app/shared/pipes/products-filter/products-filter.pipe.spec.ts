import { ProductsFilterPipe } from './products-filter.pipe';

describe('SearchArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
