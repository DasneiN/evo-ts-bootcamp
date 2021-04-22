import BinaryTree, { TraverseType } from "../src/binary_tree";
import { TreeNode } from "../src/interfaces";

import TREE_STRUCTURES from "./tests_data";

const stupidObjectCopy = <T>(target: TreeNode<T>): TreeNode<T> =>
  JSON.parse(JSON.stringify(target));

describe("BinaryTree", () => {
  it("created BinaryTree with passed structure", () => {
    const expectedStructure = stupidObjectCopy(TREE_STRUCTURES[1]);
    const tree = new BinaryTree(TREE_STRUCTURES[1]);

    expect(tree).toEqual({ root: expectedStructure });
  });

  it("change tree structure with setTree() method", () => {
    const expectedStructure = stupidObjectCopy(TREE_STRUCTURES[1]);
    const tree = new BinaryTree(TREE_STRUCTURES[0]);

    tree.setTree(TREE_STRUCTURES[1]);

    expect(tree).toEqual({ root: expectedStructure });
  });

  describe("correctly return column values with getColumn() method", () => {
    it("with empty tree", () => {
      const tree = new BinaryTree();
      const column = tree.getColumn();

      expect(column).toEqual([]);
    });

    it.each([
      [0, ["A", "E", "F"]],
      [1, ["C"]],
      [2, ["G"]],
      [-1, ["B"]],
      [-2, ["D"]],
    ])("for column #%p)", (columnIndex, expected) => {
      const tree = new BinaryTree(TREE_STRUCTURES[2]);
      const column = tree.getColumn(columnIndex);

      expect(column).toEqual(expected);
    });
  });

  describe("correctly return values with traverse() method", () => {
    const casesQnt = TREE_STRUCTURES.map((v, index) => [index]);

    it("throws error if traverseType not specified", () => {
      const tree = new BinaryTree(TREE_STRUCTURES[0]);

      expect(() => tree.traverse(-1)).toThrowError();
    });

    describe("TraverseType = PREORDER_DFS", () => {
      const EXPECTED_RESULTS = [
        ["A"],
        ["A", "B", "C"],
        ["A", "B", "D", "E", "C", "F", "G"],
        ["A", "B", "D", "C", "E", "F"],
        ["F", "B", "A", "D", "C", "E", "G", "I", "H"],
      ];

      it.each(casesQnt)("test case #%#)", (index) => {
        const tree = new BinaryTree(TREE_STRUCTURES[index]);
        const traverseResult = tree.traverse(TraverseType.PREORDER_DFS);

        expect(traverseResult).toEqual(EXPECTED_RESULTS[index]);
      });
    });

    describe("TraverseType = INORDER_DFS", () => {
      const EXPECTED_RESULTS = [
        ["A"],
        ["B", "A", "C"],
        ["D", "B", "E", "A", "F", "C", "G"],
        ["D", "B", "A", "E", "C", "F"],
        ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
      ];

      it.each(casesQnt)("test case #%#)", (index) => {
        const tree = new BinaryTree(TREE_STRUCTURES[index]);
        const traverseResult = tree.traverse(TraverseType.INORDER_DFS);

        expect(traverseResult).toEqual(EXPECTED_RESULTS[index]);
      });
    });

    describe("TraverseType = POSTORDER_DFS", () => {
      const EXPECTED_RESULTS = [
        ["A"],
        ["B", "C", "A"],
        ["D", "E", "B", "F", "G", "C", "A"],
        ["D", "B", "E", "F", "C", "A"],
        ["A", "C", "E", "D", "B", "H", "I", "G", "F"],
      ];

      it.each(casesQnt)("test case #%#)", (index) => {
        const tree = new BinaryTree(TREE_STRUCTURES[index]);
        const traverseResult = tree.traverse(TraverseType.POSTORDER_DFS);

        expect(traverseResult).toEqual(EXPECTED_RESULTS[index]);
      });
    });

    describe("TraverseType = BFS", () => {
      const EXPECTED_RESULTS = [
        ["A"],
        ["A", "B", "C"],
        ["A", "B", "C", "D", "E", "F", "G"],
        ["A", "B", "C", "D", "E", "F"],
        ["F", "B", "G", "A", "D", "I", "C", "E", "H"],
      ];

      it.each(casesQnt)("test case #%#)", (index) => {
        const tree = new BinaryTree(TREE_STRUCTURES[index]);
        const traverseResult = tree.traverse(TraverseType.BFS);

        expect(traverseResult).toEqual(EXPECTED_RESULTS[index]);
      });
    });
  });
});
