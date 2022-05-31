import { PaginateArrayPipe } from './paginate-array.pipe';

describe('PaginationPipe', () => {
  it('create an instance', () => {
    const pipe = new PaginateArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
