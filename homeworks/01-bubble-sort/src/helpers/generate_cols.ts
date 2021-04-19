import generateRandomValue from "./generate_random_value";

import CONFIG from '../config';

type Col = {
  id: number;
  value: number;
};

export default function generateCols(): Array<Col> {
    const newColsLength: number = generateRandomValue(
      CONFIG.MIN_COLS,
      CONFIG.MAX_COLS
    );
    
  return new Array(newColsLength)
    .fill(null)
    .map((c, id) => ({ id, value: generateRandomValue() }));
}
