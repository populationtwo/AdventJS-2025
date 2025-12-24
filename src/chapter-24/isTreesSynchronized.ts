function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined,
): [boolean, string] {
  if (!tree1 && !tree2) return [true, ''];

  if (!tree1 || !tree2 || tree1.value !== tree2.value) {
    return [false, tree1?.value || tree2?.value || ''];
  }

  const [leftSync] = isTreesSynchronized(tree1.left, tree2.right);
  const [rightSync] = isTreesSynchronized(tree1.right, tree2.left);

  const isSynchronized = leftSync && rightSync;

  return [isSynchronized, tree1.value];
}

export default isTreesSynchronized;
