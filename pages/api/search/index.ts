import { NextApiRequest, NextApiResponse } from 'next';
import SearchService from '../../../services/search.service';
import CategoryService from '../../../services/category.service';
import { SearchDTO, Item } from '../../../models/SearchDTO';
import { SearchMeliResponse, Result } from '../../../models/SearchMeliResponse';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;
  if (!q) return res.status(500).json({ message: 'QueryParam "Q" is required' });

  try {
    const response = await SearchService.doSearch(q as string, 4);
    const categoryMostRepeated = getMostRepeatedCategory(response.data.results);
    const catResponse = await CategoryService.getCategory(categoryMostRepeated as string);

    const categories = catResponse.data.path_from_root.map(x => x.name);
    const dto = mapSearchResponse(response.data, categories);

    res.status(200).json(dto);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const mapSearchResponse = (meliResponse: SearchMeliResponse, category: string[]): SearchDTO => {
  const dto = {} as SearchDTO;

  dto.categories = category;
  dto.author = { lastname: 'Bragazzi', name: 'Julian' };
  dto.items = meliResponse.results.reduce((acum, value) => {
    const item: Item = {
      id: value.id,
      condition: value.condition,
      free_shipping: value.shipping.free_shipping,
      // TODO: En el documento en el objecto price tiene un attr decimal, cual seria el mapeo correcto?
      price: { amount: value.price, currency: value.currency_id, decimals: 0 },
      picture: value.thumbnail,
      title: value.title,
      address: `${value.address.state_name}, ${value.address.city_name}`,
    };

    acum.push(item);

    return acum;
  }, [] as Item[]);

  return dto;
};

const getMostRepeatedCategory = (items: Result[]) => {
  const foo = items.reduce((acum, value) => {
    if (acum[value.category_id]) {
      acum[value.category_id] += 1;
    } else {
      acum[value.category_id] = 1;
    }

    return acum;
  }, {} as { [key: string]: number });

  const maxValue = Math.max(...Object.values(foo));

  const firstMostRepeatedCategory = Object.keys(foo).find(x => foo[x] === maxValue);

  return firstMostRepeatedCategory;
};

export { getMostRepeatedCategory };
