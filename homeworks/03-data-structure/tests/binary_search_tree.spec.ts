import BinarySearchTree from "../src/binary_search_tree";
import { TreeNode } from "../src/interfaces";

describe("BinarySearchTree", () => {
  it("has() method works correctly", () => {
    /*        5
     *       / \
     *     3    9
     *    / \  / \
     *   2  4 7   11
     */
    const treeStructure: TreeNode<number> = {
      value: 5,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: {
          value: 4,
          left: null,
          right: null,
        },
      },
      right: {
        value: 9,
        left: {
          value: 7,
          left: null,
          right: null,
        },
        right: {
          value: 11,
          left: null,
          right: null,
        },
      },
    };

    const tree = new BinarySearchTree(treeStructure);

    expect(tree.has(5)).toBe(true);
    expect(tree.has(1)).toBe(false);
    expect(tree.has(4)).toBe(true);
    expect(tree.has(7)).toBe(true);
    expect(tree.has(42)).toBe(false);
  });
});
