type Gifts = number[];
type MaxWeight = number;
type Result = number | null;

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
  const giftsLength = gifts.length;
  let sleighCount = 1;
  let currentWeight = 0;

  if (!gifts.length) return 0;
  if (Math.max(...gifts) > maxWeight) return null;

  for (let i = 0; i < giftsLength; i++) {
    const giftWeight = gifts[i];

    if (currentWeight + giftWeight <= maxWeight) {
      currentWeight += giftWeight;
    } else {
      sleighCount++;

      currentWeight = giftWeight;
    }
  }
  return sleighCount;
}

export default packGifts;
