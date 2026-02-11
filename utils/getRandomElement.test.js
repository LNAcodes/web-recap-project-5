import getRandomElement from "./getRandomElement.js";
test("returns a random element from an array", () => {
  const animals = ["Hund", "Katze", "Maus", "Elefant"];
  const result = getRandomElement(animals);

  expect(animals).toContain(result);
});
test("returns undefined for an empty array", () => {
  expect(getRandomElement([])).toBeUndefined();
});
