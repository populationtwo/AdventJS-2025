function drawGift(size: number, symbol: string): string {
  if (size < 2) {
    return '';
  }
  const middle = symbol + ' '.repeat(size - 2) + symbol;
  const topBottom = symbol.repeat(size);
  const rows: string[] = [topBottom];
  for (let i = 1; i < size - 1; i++) {
    rows.push(middle);
  }
  rows.push(topBottom);
  return rows.join('\n');
}
export default drawGift;
