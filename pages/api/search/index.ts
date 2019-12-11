import { NextApiRequest, NextApiResponse } from "next";
import SearchService from "../../../services/search.service";
import { SearchDTO, Item } from "../../../models/SearchDTO";
import { SearchMeliResponse } from "../../../models/SearchMeliResponse";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;
  if (!q)
    return res.status(500).json({ message: 'QueryParam "Q" is required' });

  try {
    const response = await SearchService.doSearch(q as string);

    const dto = mapSearchResponse(response.data);

    res.status(200).json(dto);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const mapSearchResponse = (meliResponse: SearchMeliResponse): SearchDTO => {
  const dto = {} as SearchDTO;

  dto.author = { lastname: "Bragazzi", name: "Julian" };
  dto.items = meliResponse.results.reduce((acum, value) => {
    const item: Item = {
      id: value.id,
      condition: value.condition,
      free_shipping: value.shipping.free_shipping,
      // TODO: En el documento en el objecto price tiene un attr decimal, cual seria el mapeo correcto?
      price: { amount: value.price, currency: value.currency_id, decimals: 0 },
      picture: value.thumbnail,
      title: value.title,
      address: `${value.address.state_name}, ${value.address.city_name}`
    };

    acum.push(item);

    return acum;
  }, [] as Item[]);

  return dto;
};
