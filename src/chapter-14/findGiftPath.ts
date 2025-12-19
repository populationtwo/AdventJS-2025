type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  // node is typed as any to allow for nested objects or primitive values
  const search = (node: any, path: Path): Path => {
    for (const [key, value] of (Object as any).entries(node)) {
      const newPath: Path = [...path, key];

      if (value === gift) {
        return newPath;
      }

      // Check if value is an object and not null before recursing
      if (value !== null && typeof value === 'object') {
        const result = search(value, newPath);
        if (result.length > 0) return result;
      }
    }
    return [];
  };

  return search(workshop, []);
}

export default findGiftPath;
