interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

interface Description {
  id: string;
}

interface Shipping {
  mode: string;
  methods: any[];
  tags: any[];
  dimensions?: any;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

interface City {
  name: string;
}

interface State {
  id: string;
  name: string;
}

interface Country {
  id: string;
  name: string;
}

interface City2 {
  id: string;
  name: string;
}

interface State2 {
  id: string;
  name: string;
}

interface SearchLocation {
  city: City2;
  state: State2;
}

interface SellerAddress {
  city: City;
  state: State;
  country: Country;
  search_location: SearchLocation;
  latitude: number;
  longitude: number;
  id: number;
}

interface Location {}

interface Geolocation {
  latitude: number;
  longitude: number;
}

interface ValueStruct {
  number: number;
  unit: string;
}

interface Struct {
  number: number;
  unit: string;
}

interface Value {
  id: string;
  name: string;
  struct: Struct;
}

interface Attribute {
  id: string;
  name: string;
  value_id: string;
  value_name: string;
  value_struct: ValueStruct;
  values: Value[];
  attribute_group_id: string;
  attribute_group_name: string;
}

export interface ItemMeliResponse {
  id: string;
  site_id: string;
  title: string;
  subtitle?: any;
  seller_id: number;
  category_id: string;
  official_store_id?: any;
  price: number;
  base_price: number;
  original_price?: any;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  buying_mode: string;
  listing_type_id: string;
  start_time: Date;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: Picture[];
  video_id?: any;
  descriptions: Description[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: SellerAddress;
  seller_contact?: any;
  location: Location;
  geolocation: Geolocation;
  coverage_areas: any[];
  attributes: Attribute[];
  warnings: any[];
  listing_source: string;
  variations: any[];
  status: string;
  sub_status: any[];
  tags: string[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id?: any;
  differential_pricing?: any;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: Date;
  last_updated: Date;
  health: number;
  catalog_listing: boolean;
}
