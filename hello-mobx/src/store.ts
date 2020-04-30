import { observable } from "mobx";

interface City {
  code: string;
  name: string;
}

const Cities: Array<City> = [
  { code: "am", name: "Amsterdam" },
  { code: "ld", name: "London" },
  { code: "mr", name: "Madrid" },
];

export const createStore = () => {
  const store = {
    query: observable.box(""),
    setQuery(query: string) {
      store.query.set(query.toLowerCase());
    },
    get filteredCities() {
      return Cities.filter((city) =>
        city.name.toLowerCase().includes(store.query.get())
      );
    },
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>;
export type TCities = typeof Cities;
export type TCity = keyof City;
