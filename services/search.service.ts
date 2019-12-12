import axios from 'axios';
import { SearchMeliResponse } from '../models/SearchMeliResponse';

class SearchService {
  static async doSearch(q: string, limit = 50) {
    const url = 'https://api.mercadolibre.com/sites/MLA/search';
    const params = { q, limit };

    return axios.get<SearchMeliResponse>(url, { params });
  }
}

export default SearchService;
