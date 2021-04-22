import { TreeNode } from "../src/interfaces";

const TREE_STRUCTURES: TreeNode<string>[] = [
  /*
   *     A
   */
  {
    value: "A",
    left: null,
    right: null,
  },
  /*        A
   *       / \
   *     B    C
   */
  {
    value: "A",
    left: {
      value: "B",
      left: null,
      right: null,
    },
    right: {
      value: "C",
      left: null,
      right: null,
    },
  },
  /*        A
   *       / \
   *     B    C
   *    / \  / \
   *   D  E F   G
   */
  {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: null,
        right: null,
      },
      right: {
        value: "E",
        left: null,
        right: null,
      },
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: null,
        right: null,
      },
      right: {
        value: "G",
        left: null,
        right: null,
      },
    },
  },
  /*              A
   *             /  \
   *           B     C
   *         /      / \
   *       D       E   F
   */

  {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: "C",
      left: {
        value: "E",
        left: null,
        right: null,
      },
      right: {
        value: "F",
        left: null,
        right: null,
      },
    },
  },
  /*              F
   *             / \
   *           B     G
   *         /  \      \
   *        A    D      I
   *            / \    /
   *           C   E  H
   */
  {
    value: "F",
    left: {
      value: "B",
      left: {
        value: "A",
        left: null,
        right: null,
      },
      right: {
        value: "D",
        left: {
          value: "C",
          left: null,
          right: null,
        },
        right: {
          value: "E",
          left: null,
          right: null,
        },
      },
    },
    right: {
      value: "G",
      left: null,
      right: {
        value: "I",
        left: {
          value: "H",
          left: null,
          right: null,
        },
        right: null,
      },
    },
  },
];

export default TREE_STRUCTURES;
