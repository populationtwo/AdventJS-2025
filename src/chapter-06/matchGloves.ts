type Glove = { hand: 'L' | 'R'; color: string };

function matchGloves(gloves: Glove[]): string[] {
  const leftCount = new Map();
  const rightCount = new Map();
  const result: string[] = [];

  for (const { hand, color } of gloves) {
    if (hand === 'L') {
      if ((rightCount.get(color) || 0) > 0) {
        rightCount.set(color, rightCount.get(color) - 1);
        result.push(color);
      } else {
        leftCount.set(color, (leftCount.get(color) || 0) + 1);
      }
    } else {
      if ((leftCount.get(color) || 0) > 0) {
        leftCount.set(color, leftCount.get(color) - 1);
        result.push(color);
      } else {
        rightCount.set(color, (rightCount.get(color) || 0) + 1);
      }
    }
  }

  return result;
}

export default matchGloves;
