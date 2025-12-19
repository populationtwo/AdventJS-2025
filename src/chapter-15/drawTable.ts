type Data = Array<Record<string, string | number>>;
type SortBy = string;

function drawTable(data: Data, sortBy: SortBy): string {
  if (data.length === 0) return '';
  const keys = Object.keys(data[0]);

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueA - valueB;
    }

    return String(valueA).localeCompare(String(valueB));
  });

  const columnMaxWidth = keys.map((key, i) => {
    const headerLetter = String.fromCharCode(65 + i); // A, B, C...
    const values = sortedData.map((row) => String(row[key]));
    return Math.max(headerLetter.length, ...values.map((v) => v.length));
  });

  const separatorLine = () => {
    const segment = columnMaxWidth.map((width) => '-'.repeat(width + 2));
    return `+${segment.join('+')}+`;
  };

  const createRow = (values: string[]) => {
    const cells = values.map((val, i) => {
      return ` ${val.padEnd(columnMaxWidth[i])} `;
    });
    return `|${cells.join('|')}|`;
  };
  const lines: string[] = [];
  const separator = separatorLine();

  lines.push(separator);

  const headers = keys.map((_, i) => String.fromCharCode(65 + i));
  lines.push(createRow(headers));

  lines.push(separator);

  for (const row of sortedData) {
    const values = keys.map((key) => String(row[key]));
    lines.push(createRow(values));
  }

  lines.push(separator);

  return lines.join('\n');
}

export default drawTable;
