import { observable } from "mobx";

const data = {
  helloJooxReplica: observable.box(""),
};

export const getHelloText = () => data.helloJooxReplica.get();
export const setHelloText = (text: string) => data.helloJooxReplica.set(text);
