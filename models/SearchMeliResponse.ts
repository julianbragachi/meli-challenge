interface Paging {
  total: number;
  offset: number;
  limit: number;
  primary_results: number;
}

interface Seller {
  id: number;
  permalink?: any;
  power_seller_status: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: any[];
}

interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: any[];
  logistic_type: string;
  store_pick_up: boolean;
}

interface Country {
  id: string;
  name: string;
}

interface State {
  id: string;
  name: string;
}

interface City {
  id: string;
  name: string;
}

interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: Country;
  state: State;
  city: City;
  latitude: string;
  longitude: string;
}

interface Value {
  id: string;
  name: string;
  struct?: any;
  source?: number;
}

interface Attribute {
  id: string;
  name: string;
  value_struct?: any;
  values: Value[];
  attribute_group_name: string;
  source?: number;
  value_id: string;
  value_name: string;
  attribute_group_id: string;
}

interface DifferentialPricing {
  id: number;
}

export interface Result {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  original_price?: any;
  category_id: string;
  official_store_id?: any;
  catalog_product_id: string;
  tags: string[];
  differential_pricing: DifferentialPricing;
}

interface Sort {
  id: string;
  name: string;
}

interface AvailableSort {
  id: string;
  name: string;
}

interface PathFromRoot {
  id: string;
  name: string;
}

interface Value2 {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

interface Filter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

interface Value3 {
  id: string;
  name: string;
  results: number;
}

interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value3[];
}

export interface SearchMeliResponse {
  site_id: string;
  query: string;
  paging: Paging;
  results: Result[];
  secondary_results: any[];
  related_results: any[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
}
