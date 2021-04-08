import getRandomValue from "./generate_random_value";

type Col = {
  id: number;
  value: number;
};

export default function generateCols(arrayLength: number): Array<Col> {
  return new Array(arrayLength)
    .fill(null)
    .map((c, id) => ({ id, value: getRandomValue() }));
}
