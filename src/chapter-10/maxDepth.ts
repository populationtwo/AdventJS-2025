function maxDepth(s: string): number {
  const arr = s.split('');
  let depth = 0;
  let maxDepth = 0;

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];

    if (char === '[') {
      depth++;
      maxDepth = Math.max(maxDepth, depth);
    } else if (char === ']') {
      depth--;
      if (depth < 0) return -1;
    }
  }

  return depth === 0 ? maxDepth : -1;
}

export default maxDepth;
