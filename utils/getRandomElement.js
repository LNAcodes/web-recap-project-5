export default function getRandomElement(array) {
  if (!array || !Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
