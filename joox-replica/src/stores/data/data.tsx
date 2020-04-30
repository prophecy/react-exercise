import { observable, computed } from "mobx";

// State
const helloText = observable.box("");

export const getHelloText = () => helloText.get();
export const setHelloText = (text: string) => helloText.set(text);

// Compute
const upHelloText = computed(() => helloText.get().toUpperCase());

export const getUpHelloText = () => upHelloText.get();
