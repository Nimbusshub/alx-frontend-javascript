export default function createIteratorObject(report) {
  // eslint-disable-next-line
  const obj = Object.values(report['allEmployees']);
  const temp = [];
  for (const i of obj) {
    temp.push(...i);
  }

  return temp;
}
