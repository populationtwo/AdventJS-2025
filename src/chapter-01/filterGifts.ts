function filterGifts(gifts: string[]): string[] {
  // Code here
  return gifts.filter((num) => !num.includes('#'));
}

export default filterGifts;
