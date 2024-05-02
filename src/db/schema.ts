import {
  integer,
  serial,
  text,
  pgTable,
  real,
  timestamp,
  pgEnum,
  PgColumn,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: real('price').default(0).notNull(),
  size: text('size').notNull(),
  description: text('description'),
  createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});

export const productsRelations = relations(products, ({ many }) => ({
  cartProducts: many(cartProducts),
}));

export const statusEnum = pgEnum('status', ['in_cart', 'ordered']);

// TODO: to be continued
export const carts = pgTable('carts', {
  id: serial('id').primaryKey(),
  status: statusEnum('status').default('in_cart').notNull(),
  createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});

export const cartssRelations = relations(carts, ({ one }) => ({
  // author: one(products, { fields: [carts.authorId], references: [products.id] }),
}));

export const cartProducts = pgTable('cart_products', {
  id: serial('id').primaryKey(),
  cartId: integer('cart_id')
    .references(() => carts.id, { onDelete: 'cascade' })
    .notNull(),
  productId: integer('product_id')
    .references(() => products.id, { onDelete: 'cascade' })
    .notNull(),
  quantity: integer('quantity').default(1).notNull(),
  createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});

export const cartProductsRelations = relations(cartProducts, ({ one }) => ({
  cart: one(carts, { fields: [cartProducts.id], references: [carts.id] }),
  product: one(carts, { fields: [cartProducts.id], references: [carts.id] }),
}));

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  cartId: integer('cart_id')
    .references(() => carts.id, { onDelete: 'cascade' })
    .notNull(),
  totalPrice: real('total_price').default(0).notNull(),
  createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});
