export default function updateUniqueItems(aMap) {
  for (const [key, value] of aMap.entries()) {
    if (value === 1) {
      try {
        aMap.set(key, 100);
      } catch (err) {
        return 'Cannot process';
      }
    } else aMap.set(key, value);
  }
  return 0;
}
