// Modify from this tutorial
// Ref: https://blog.mselee.com/posts/2019/06/08/using-mobx-with-react-hooks-typescript/

import * as data from "./data/data";
import { initMockData } from "./data/mockData";

export const createStore = () => {
  // Call this function to init with mock data
  initMockData();
  // Redirect the data, so we don't need to modify this al the time
  return data;
};

export type TStore = ReturnType<typeof createStore>;
