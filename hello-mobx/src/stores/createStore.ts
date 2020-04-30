// Modify from this tutorial
// Ref: https://blog.mselee.com/posts/2019/06/08/using-mobx-with-react-hooks-typescript/

import { observable } from "mobx";
import { cityList, initMockData } from "./data/data";

export const createStore = () => {
  // Call this function to init with mock data
  initMockData();

  const store = {
    query: observable.box(""),

    setQuery(query: string) {
      store.query.set(query.toLowerCase());
    },

    get filteredCities() {
      return cityList.filter((city) =>
        city.name.toLowerCase().includes(store.query.get())
      );
    },
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>;
