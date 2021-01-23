export type Many<T> = T | T[];

export type Simplify<T> = T extends object | any[]
  ? { [K in keyof T]: T[K] }
  : T;
