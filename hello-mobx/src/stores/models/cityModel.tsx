interface City {
  code: string;
  name: string;
}

export type TCity = keyof City;
export type TCityList = Array<City>;
