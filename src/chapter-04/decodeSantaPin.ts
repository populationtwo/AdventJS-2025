function decodeSantaPin(code: string): string | null {
  const matches: string[] | null = code.match(/\[(.*?)]/g);

  let results = '';
  let cacheLastNumber: number | null = null;
  if (matches !== null) {
    for (const str of matches.map((x) => x.slice(1, -1))) {
      const firstChar: string = str[0];

      if (firstChar === '<') {
        if (cacheLastNumber !== null) {
          results += cacheLastNumber.toString();
        }
        continue;
      }
      if (!firstChar) return null;
      let num: number = Number(firstChar);
      for (const op of str.slice(1)) {
        if (op === '+') {
          num = (num + 1) % 10; // wrap around 0–9
        } else if (op === '-') {
          num = (num + 9) % 10; // equivalent to num - 1 with wrap
        }
      }

      cacheLastNumber = num;
      results += num.toString();
    }

    if (!results || results.length < 4) return null;
  }
  return results;
}
export default decodeSantaPin;
