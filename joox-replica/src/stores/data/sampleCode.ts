import { observable, computed, autorun } from "mobx";

export const startSamples = () => {
  // Test boxing data
  const helloText = observable.box("");

  const getHelloText = () => helloText.get();
  const setHelloText = (text: string) => helloText.set(text);

  // Test computed data
  const upHelloText = computed(() => helloText.get().toUpperCase());

  const getUpHelloText = () => upHelloText.get();

  // Test observable data
  var person = observable({
    // observable properties:
    name: "John",
    age: 42,
    showAge: false,

    get labelName() {
      return "AR: " + this.name;
    },

    get labelAge() {
      return this.age;
    },
  });

  const det = () => person.age;

  console.log("print!");
  console.log(person.name);

  autorun(() => console.log(person.labelName));
  autorun(() => console.log(person.labelAge));

  // Using this line, autorun will run the labelName => Awesome !
  person.name = "Linda";

  // Using this line, autorun will run the labeAge => Awewome !
  //person.age = 21;
};
