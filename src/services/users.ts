import { db } from '@/db';

export const getUsers = async () => {
  return await db.query.users.findMany();
};
