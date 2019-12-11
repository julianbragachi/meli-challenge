import axios from "axios";
import { ItemMeliResponse } from "../models/ItemMeliResponse";
import { ItemDescriptionMeliResponse } from "../models/ItemDescriptionMeliResponse";

class ItemService {
  static async getItem(id: string) {
    const url = `https://api.mercadolibre.com/items/${id}`;

    return axios.get<ItemMeliResponse>(url);
  }

  static async getItemDescription(id: string) {
    const url = `https://api.mercadolibre.com/items/${id}/descriptions`;

    return axios.get<ItemDescriptionMeliResponse[]>(url);
  }
}

export default ItemService;
