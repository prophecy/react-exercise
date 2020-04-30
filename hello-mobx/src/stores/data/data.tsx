import { TCityList } from "../models/cityModel";
import * as md from "./mockData";

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// Data

export let cityList: TCityList = [];

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// Mock data

export const initMockData = () => {
  cityList = md.cityList;
};
