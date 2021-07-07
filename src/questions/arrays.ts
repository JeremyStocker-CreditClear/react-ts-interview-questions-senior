export {};

const people = [
  {
    name: "Rachael",
    age: 24,
  },
  {
    name: "Andrew",
    age: 25,
  },
  {
    name: "John",
    age: 26,
  },
  {
    name: "Sarah",
    age: 27,
  },
];

/**
 * === TEST ===
 * Lets say you have an array of people and you want to find someone with the name of John, what is the performance
 * difference between the two solutions below?
 */
const sample1 = people.filter((person) => person.name === "John");

const sample2 = people.find((person) => person.name === "John");

/**
 * === TEST ===
 * Lets say you have a large array of data containing 10,000~ items which comes from an API request, and you want to
 * place this data within your redux store. Lets say each item in that array is associated with an ID, what could you do
 * after fetching this data from an API before putting it in the store for a performance benefit when looking up a value
 * given you already have the ID of the item you want?
 *
 * Say for example inside a component you get that state from the store (containing the 10,000 items), given that you already
 * have the ID you want, how could you perform a faster lookup without having to iterate over each item to find the one you want?
 */
