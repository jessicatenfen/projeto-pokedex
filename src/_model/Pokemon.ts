import { Type } from "./Type";

export interface Pokemon {
    number: number;
    name: string;
    types: Type[];
    image: string;
  }