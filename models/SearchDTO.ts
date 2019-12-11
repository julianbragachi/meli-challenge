export interface SearchDTO {
  author: Author;
  categories: string[];
  items: Item[];
}

interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  address: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
