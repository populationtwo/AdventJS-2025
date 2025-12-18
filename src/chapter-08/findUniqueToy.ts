function findUniqueToy(toy: string): string {
  const counts: Record<string, number> = {};

  for (const char of toy) {
    const key = char.toLowerCase();
    counts[key] = (counts[key] || 0) + 1;
  }
  for (const char of toy) {
    if (counts[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return '';
}

export default findUniqueToy;
