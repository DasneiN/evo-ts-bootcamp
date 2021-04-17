import mergeSort, {
  defaultCompareFunction,
  mergeArrays,
  ICompareFunction,
} from "../src/merge_sort";

describe("mergeSort function and its' helpers", () => {
  describe("defaultCompareFunction", () => {
    it.each([
      [1, 2, -1],
      [1, 1, 0],
      [2, 1, 1],
      ["a", 1, 1],
      ["a", "b", -1],
      ["a", "a", 0],
      ["b", "a", 1],
      ["abba", "acdc", -1],
      [{}, {}, 0],
    ])("defaultCompareFunction(%p, %p)", (a, b, expected) => {
      expect(defaultCompareFunction(a, b)).toBe(expected);
    });
  });

  describe("mergeArrays", () => {
    it.each([
      [
        [1, 2, 3],
        [4, 5, 6],
        [1, 2, 3, 4, 5, 6],
      ],
      [
        [1, 3, 5],
        [2, 4, 6],
        [1, 2, 3, 4, 5, 6],
      ],
      [
        [2, 4, 6],
        [1, 3, 5],
        [1, 2, 3, 4, 5, 6],
      ],
      [
        [1, 11, 12, 2, 3, 7, 8, 9],
        [10, 4, 5, 6],
        [1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9],
      ],
    ])("mergeArrays(%p, %p)", (a, b, expected) => {
      expect(mergeArrays(a, b)).toEqual(expected);
    });
  });

  describe("mergeSort", () => {
    const compareFunction: ICompareFunction = (a: number, b: number): number => b - a;

    it.each([
      [[2, 5, 3, 6, 1, 4], undefined, [1, 2, 3, 4, 5, 6]],
      [
        ["element", "axis", "class", "mouse", "axel"],
        undefined,
        ["axel", "axis", "class", "element", "mouse"],
      ],
      [[2, 5, 3, 6, 1, 4], compareFunction, [6, 5, 4, 3, 2, 1]],
    ])(
      "mergeSort(%p, %p)",
      (
        arr: Array<any>,
        compareFunction: ICompareFunction | undefined,
        expected: Array<any>
      ) => {
        expect(mergeSort(arr, compareFunction)).toEqual(expected);
      }
    );
  });
});
