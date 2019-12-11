import axios from "axios";
import { SearchMeliResponse } from "../models/SearchMeliResponse";

class SearchService {
  static async doSearch(q: string) {
    const url = "https://api.mercadolibre.com/sites/MLA/search";
    const params = { q };

    return axios.get<SearchMeliResponse>(url, { params });
  }
}

export default SearchService;
