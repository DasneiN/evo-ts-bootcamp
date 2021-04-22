import BinaryTree from "./binary_tree";
import { IBinarySearchTree, TreeNode } from "./interfaces";

export default class BinarySearchTree
  extends BinaryTree<number>
  implements IBinarySearchTree {

  compareNodeValue(searchingValue: number, node: TreeNode<number>): boolean {
    if (!node) {
      return false;
    }

    if (searchingValue < node.value) {
      return this.compareNodeValue(searchingValue, node.left);
    }

    if (searchingValue > node.value) {
      return this.compareNodeValue(searchingValue, node.right);
    }

    return true;
  }

  has(value: number): boolean {
    return this.compareNodeValue(value, this.root);
  }
}
