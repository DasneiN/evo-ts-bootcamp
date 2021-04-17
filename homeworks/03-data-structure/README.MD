 PASS  tests/merge_sort.spec.ts
  mergeSort function and its' helpers
    defaultCompareFunction
      ✓ defaultCompareFunction(1, 2) (3 ms)
      ✓ defaultCompareFunction(1, 1)
      ✓ defaultCompareFunction(2, 1)
      ✓ defaultCompareFunction("a", 1) (1 ms)
      ✓ defaultCompareFunction("a", "b")
      ✓ defaultCompareFunction("a", "a")
      ✓ defaultCompareFunction("b", "a")
      ✓ defaultCompareFunction("abba", "acdc") (1 ms)
      ✓ defaultCompareFunction({}, {})
    mergeArrays
      ✓ mergeArrays([1, 2, 3], [4, 5, 6]) (1 ms)
      ✓ mergeArrays([1, 3, 5], [2, 4, 6]) (1 ms)
      ✓ mergeArrays([2, 4, 6], [1, 3, 5])
      ✓ mergeArrays([1, 11, 12, 2, 3, 7, 8, 9], [10, 4, 5, 6])
    mergeSort
      ✓ mergeSort([2, 5, 3, 6, 1, 4], undefined) (1 ms)
      ✓ mergeSort(["element", "axis", "class", "mouse", "axel"], undefined)
      ✓ mergeSort([2, 5, 3, 6, 1, 4], [Function compareFunction]) (1 ms)

---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |
 merge_sort.ts |     100 |      100 |     100 |     100 |
---------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       16 passed, 16 total
Snapshots:   0 total
Time:        6.154 s
Ran all test suites related to changed files.