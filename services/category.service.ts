import axios from 'axios';
import { CategoryMeliResponse } from '../models/CategoryMeliResponse';

class CategoryService {
  static async getCategory(id: string) {
    const url = `https://api.mercadolibre.com/categories/${id}`;

    return axios.get<CategoryMeliResponse>(url);
  }
}

export default CategoryService;
