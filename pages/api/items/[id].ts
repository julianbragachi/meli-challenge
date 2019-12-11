import { NextApiRequest, NextApiResponse } from "next";
import ItemService from "../../../services/item.service";
import { ItemDTO } from "../../../models/ItemDTO";
import { ItemMeliResponse } from "../../../models/ItemMeliResponse";
import { ItemDescriptionMeliResponse } from "../../../models/ItemDescriptionMeliResponse";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  Promise.all([
    ItemService.getItem(id as string),
    ItemService.getItemDescription(id as string)
  ])
    .then(([item, itemDescription]) => {
      const data = mapSearchResponse(item.data, itemDescription.data);
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ statusCode: 500, message: err.message });
    });
};

const mapSearchResponse = (
  item: ItemMeliResponse,
  desc: ItemDescriptionMeliResponse[]
): ItemDTO => {
  const dto = {} as ItemDTO;

  dto.author = { lastname: "Bragazzi", name: "Julian" };
  dto.item = {
    id: item.id,
    address: `${item.seller_address.state.name}, ${item.seller_address.city.name}`,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    title: item.title,
    // TODO: En el documento en el objecto price tiene un attr decimal, cual seria el mapeo correcto?
    price: { amount: item.price, currency: item.currency_id, decimals: 0 },
    picture: item.thumbnail,
    sold_quantity: item.sold_quantity,
    description: desc.length > 0 ? desc[0].plain_text : ""
  };

  return dto;
};
