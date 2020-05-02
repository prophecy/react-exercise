import { observable, computed, autorun } from "mobx";
import { startSamples } from "./sampleCode";

// startSamples();

export const mainPage = observable({
  header: {},
  sideBar: {},
  footder: {},
  content: {
    section: [],
  },
});

// Setup section
