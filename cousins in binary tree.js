const replaceValueInTree = (root) => {
  if (root) root.val = 0;
  let q = [root];

  while (q.length) {
    let newQ = [];
    let totalSum = 0;

    for (let i = 0; i < q.length; i++) {
      const node = q[i];
      if (node.left) {
        newQ.push(node.left);
        totalSum += node.left.val;
      }
      if (node.right) {
        newQ.push(node.right);
        totalSum += node.right.val;
      }
    }

    for (let i = 0; i < q.length; i++) {
      const node = q[i];
      let nodeSum = 0;
      if (node.left) {
        nodeSum += node.left.val;
      }
      if (node.right) {
        nodeSum += node.right.val;
      }

      let remain = totalSum - nodeSum;

      if (node.left) node.left.val = remain;
      if (node.right) node.right.val = remain;
    }
    q = newQ;
  }

  return root;
};
