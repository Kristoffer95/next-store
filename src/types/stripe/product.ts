import { CartItem } from '@prisma/client';

export type Price = {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: 'php' | 'usd';
  custom_unit_amount: null;
  livemode: boolean;
  lookup_key: null;
  metadata: {};
  nickname: null;
  product: string;
  recurring: null;
  tax_behavior: string;
  tiers_mode: null;
  transform_quantity: null;
  type: 'one_time' | 'recurring';
  unit_amount: number;
  unit_amount_decimal: string;
};

export type Product = {
  id: string;
  object: string;
  active: boolean;
  attributes: string[];
  created: number;
  default_price: Price;
  deactivate_on: string[];
  description: string;
  images: string[];
  livemode: boolean;
  metadata: any;
  name: string;
  package_dimensions: any;
  shippable: boolean;
  statement_descriptor: string;
  type: string;
  unit_label: string;
  updated: number;
  url: string;
  cartItem?: CartItem;
};
