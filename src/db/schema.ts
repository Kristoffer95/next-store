import {
  integer,
  serial,
  text,
  pgTable,
  real,
  timestamp,
  pgEnum,
  PgColumn,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { AdapterAccount } from 'next-auth/adapters';

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

// NextAuth

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
