import { getMostRepeatedCategory } from '../pages/api/search';
import { Result } from '../models/SearchMeliResponse';

describe('GetMostRepeatedCategory Function', () => {
  it('get the most repeated category', () => {
    const foo: any[] = [
      { category_id: 'categoria_1' },
      { category_id: 'categoria_1' },
      { category_id: 'categoria_1' },
      { category_id: 'categoria_9' },
    ];

    const category = getMostRepeatedCategory(foo);

    expect(category).toBe('categoria_1');
  });

  it('get the first most repeated category', () => {
    const foo: any[] = [
      { category_id: 'categoria_1' },
      { category_id: 'categoria_1' },
      { category_id: 'categoria_1' },
      { category_id: 'categoria_9' },
      { category_id: 'categoria_9' },
      { category_id: 'categoria_9' },
    ];

    const category = getMostRepeatedCategory(foo);

    expect(category).toBe('categoria_1');
  });
});
