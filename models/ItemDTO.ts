import { Item } from './SearchDTO';

export interface ItemDTO {
  author: Author;
  item: ItemWithDescription;
  category: string[];
}

interface Author {
  name: string;
  lastname: string;
}

export interface ItemWithDescription extends Item {
  sold_quantity: number;
  description: string;
}
