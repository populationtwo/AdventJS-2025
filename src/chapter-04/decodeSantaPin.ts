function decodeSantaPin(code: string): string | null {
  const matches = code.match(/\[(.*?)\]/g);
  if (!matches) return null;

  const results: string[] = [];
  let cacheLastNumber: number | null = null;

  for (const match of matches) {
    const content = match.slice(1, -1);

    if (content.length === 0) return null;
    const firstChar = content[0];

    if (firstChar === '<') {
      if (cacheLastNumber === null) return null;
      results.push(cacheLastNumber.toString());
      continue;
    }

    let num = parseInt(firstChar, 10);
    if (isNaN(num)) return null;

    for (let i = 1; i < content.length; i++) {
      const op = content[i];
      if (op === '+') {
        num = (num + 1) % 10;
      } else if (op === '-') {
        num = (num + 9) % 10; // Clean way to handle negative wrap-around
      } else {
        return null; // Validation: Invalid character found in block
      }
    }

    cacheLastNumber = num;
    results.push(num.toString());
  }

  const finalPin = results.join('');
  return finalPin.length >= 4 ? finalPin : null;
}
export default decodeSantaPin;
