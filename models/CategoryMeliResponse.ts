interface PathFromRoot {
  id: string;
  name: string;
}

interface ChildrenCategory {
  id: string;
  name: string;
  total_items_in_this_category: number;
}

interface Settings {
  adult_content: boolean;
  buying_allowed: boolean;
  buying_modes: string[];
  coverage_areas: string;
  currencies: string[];
  fragile: boolean;
  immediate_payment: string;
  item_conditions: string[];
  items_reviews_allowed: boolean;
  max_description_length: number;
  max_pictures_per_item: number;
  max_sub_title_length: number;
  max_title_length: number;
  price: string;
  restrictions: any[];
  rounded_address: boolean;
  seller_contact: string;
  shipping_modes: string[];
  shipping_options: string[];
  shipping_profile: string;
  show_contact_information: boolean;
  simple_shipping: string;
  stock: string;
  sub_vertical?: any;
  tags: any[];
  vertical?: any;
  vip_subdomain: string;
  mirror_category?: any;
  listing_allowed: boolean;
  maximum_price?: any;
  minimum_price?: any;
}

export interface CategoryMeliResponse {
  id: string;
  name: string;
  picture: string;
  permalink: string;
  total_items_in_this_category: number;
  path_from_root: PathFromRoot[];
  children_categories: ChildrenCategory[];
  attribute_types: string;
  settings: Settings;
  meta_categ_id?: any;
  attributable: boolean;
}
