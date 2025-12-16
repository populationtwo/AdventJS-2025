function manufactureGifts(giftsToProduce: Array<{ toy: string; quantity: number }>): string[] {
  // Code here
  const result: string[] = [];
  giftsToProduce.forEach((item) => {
    for (let i = 0; i < item.quantity; i++) {
      result.push(item.toy);
    }
  });
  return result;
}

export default manufactureGifts;
