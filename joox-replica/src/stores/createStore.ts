// Modify from this tutorial
// Ref: https://blog.mselee.com/posts/2019/06/08/using-mobx-with-react-hooks-typescript/

import * as viewModel from "./data/viewModel";
import { initMockData } from "./data/mockViewModel";

let isStoreCreated = false;

export const createStore = () => {
  // Utilize the singleton concept to make sure that we have only one store
  if (isStoreCreated) return viewModel;
  isStoreCreated = true;

  // Call this function to init with mock data
  initMockData();

  // Redirect the data, so we don't need to modify this al the time
  return viewModel;
};

export type TStore = ReturnType<typeof createStore>;
