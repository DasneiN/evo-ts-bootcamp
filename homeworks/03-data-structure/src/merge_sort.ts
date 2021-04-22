export interface ICompareFunction {
  (a: any, b: any): number;
}

export function defaultCompareFunction<T>(a: T, b: T): number {
  return a.toString().localeCompare(b.toString());
}

export function mergeArrays<T>(
  arr1: Array<T>,
  arr2: Array<T>,
  compareFunction: ICompareFunction = defaultCompareFunction
): Array<T> {
  let result: Array<T> = [];

  while (arr1.length && arr2.length) {
    const mergedElement =
      compareFunction(arr1[0], arr2[0]) > 0 ? arr2.shift() : arr1.shift();
    result.push(mergedElement);
  }

  result = [...result, ...arr1, ...arr2];

  return result;
}

export default function mergeSort<T>(
  arr: Array<T>,
  compareFunction: ICompareFunction = defaultCompareFunction
): Array<T> {
  if (arr.length < 2) {
    return arr;
  }

  const arrayCenterIndex = Math.floor(arr.length / 2);
  const leftPart = arr.slice(0, arrayCenterIndex);
  const rightPart = arr.slice(arrayCenterIndex);
  const sortedLeftPart = mergeSort(leftPart, compareFunction);
  const sortedRightPart = mergeSort(rightPart, compareFunction);

  return mergeArrays(sortedLeftPart, sortedRightPart, compareFunction);
}
