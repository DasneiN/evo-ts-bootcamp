import { IBinaryTree, IBinarySearchTree, TreeNode } from "./interfaces";

export enum TraverseType {
  BFS,
  INORDER_DFS,
  POSTORDER_DFS,
  PREORDER_DFS,
}

function throwError(): never {
  throw new Error("Specify the traverseType prop!");
}

export default class BinaryTree<T> implements IBinaryTree<T> {
  constructor(public root?: TreeNode<T>) {}

  setTree(value: TreeNode<T>): this {
    this.root = value;
    return this;
  }

  bfs(node: TreeNode<T>): Array<T> {
    let queue: TreeNode<T>[] = [];
    let values: Array<T> = [];

    queue.push(node);

    while (queue.length > 0) {
      const tempNode: TreeNode<T> = queue.shift();

      values.push(tempNode.value);

      if (tempNode.left) {
        queue.push(tempNode.left);
      }

      if (tempNode.right) {
        queue.push(tempNode.right);
      }
    }

    return values;
  }

  dfsInOrder(node: TreeNode<T>): Array<T> {
    if (node == null) return [];

    const leftNode = this.dfsInOrder(node.left);
    const rightNode = this.dfsInOrder(node.right);

    return [...leftNode, node.value, ...rightNode];
  }

  dfsPostOrder(node: TreeNode<T>): Array<T> {
    if (node == null) return [];

    const leftNode = this.dfsPostOrder(node.left);
    const rightNode = this.dfsPostOrder(node.right);

    return [...leftNode, ...rightNode, node.value];
  }

  dfsPreOrder(node: TreeNode<T>): Array<T> {
    if (node == null) return [];

    const leftNode = this.dfsPreOrder(node.left);
    const rightNode = this.dfsPreOrder(node.right);

    return [node.value, ...leftNode, ...rightNode];
  }

  traverse(traverseType: TraverseType): Array<T> {
    switch (traverseType) {
      case TraverseType.BFS:
        return this.bfs(this.root);

      case TraverseType.INORDER_DFS:
        return this.dfsInOrder(this.root);

      case TraverseType.POSTORDER_DFS:
        return this.dfsPostOrder(this.root);

      case TraverseType.PREORDER_DFS:
        return this.dfsPreOrder(this.root);

      default:
        return throwError();
    }
  }

  getColumnValue(
    node: TreeNode<T>,
    targetColNumber: number,
    currentColNumber: number
  ) {
    const leftNodesValues = node.left
      ? this.getColumnValue(node.left, targetColNumber, currentColNumber - 1)
      : [];
    const rightNodesValues = node.right
      ? this.getColumnValue(node.right, targetColNumber, currentColNumber + 1)
      : [];

    if (currentColNumber !== targetColNumber) {
      return [...leftNodesValues, ...rightNodesValues];
    }

    return [node.value, ...leftNodesValues, ...rightNodesValues];
  }

  getColumn(columnOrder: number = 0): Array<T> {
    if (this.root) {
      return this.getColumnValue(this.root, columnOrder, 0);
    }

    return [];
  }
}
