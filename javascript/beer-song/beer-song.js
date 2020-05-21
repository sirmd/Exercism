
const verses = [
  {
    rule: ({ bottleCount }) => bottleCount > 1 && (bottleCount - 1) >= 1,
    verse: ({ bottleCount }) => [`${bottleCount} bottles of beer on the wall, ${bottleCount} bottles of beer.`,
    `Take one down and pass it around, ${bottleCount - 1} ${(bottleCount - 1 == 1) ? 'bottle' : 'bottles'} of beer on the wall.`]
  },
  {
    rule: ({ bottleCount }) => bottleCount == 1,
    verse: () => [`1 bottle of beer on the wall, 1 bottle of beer.`,
      `Take it down and pass it around, no more bottles of beer on the wall.`]
  },
  {
    rule: ({ bottleCount }) => bottleCount == 0,
    verse: () => ['No more bottles of beer on the wall, no more bottles of beer.',
      'Go to the store and buy some more, 99 bottles of beer on the wall.']
  }
]


export const recite = (initialBottlesCount, takeDownCount) => {
  var result = [];
  var params = { bottleCount: initialBottlesCount, downCount: takeDownCount };
  for (let verse = params.downCount; verse >= 1; verse--) {
    (verses.find(({ rule }) => rule(params)).verse(params))
      .forEach(ans => result.push(ans));
    if (verse > 1) result.push('');
    params.bottleCount--;
  }
  return result;
};
