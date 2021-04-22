import { TraverseType } from "./binary_tree";

export interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

export interface IBinaryTree<T> {
  setTree(value: TreeNode<T>): this;
  traverse(traverseType: TraverseType): Array<T>;
  getColumn(columnOrder: number): Array<T>;
}

export interface IBinarySearchTree {
  has(value: number): boolean;
}
