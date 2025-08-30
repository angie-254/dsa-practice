/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopy = function(original, cloned, target) {
    // BFS queue, store pairs [node from original, node from cloned]
    let queue = [[original, cloned]];

    while (queue.length > 0) {
        let [origNode, cloneNode] = queue.shift();

        // If the current original node matches target, return cloned node
        if (origNode === target) {
            return cloneNode;
        }

        // Push children in pairs
        if (origNode.left) {
            queue.push([origNode.left, cloneNode.left]);
        }
        if (origNode.right) {
            queue.push([origNode.right, cloneNode.right]);
        }
    }

    return null; // If not found
};
