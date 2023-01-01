export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) throw Error();
    else {
      const result = numerator / denominator;
      return result;
    }
  } catch (err) {
    throw Error('cannot divide by 0');
  }
}
