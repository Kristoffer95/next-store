export type SearchParams = string | string[] | undefined;

export type Params = {
  searchParams: { [key: string] } & SearchParams;
};
