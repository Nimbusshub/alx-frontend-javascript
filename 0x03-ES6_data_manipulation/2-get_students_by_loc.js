export default function getStudentsByLocation(arr, city) {
  return arr.filter((val) => {
    if (val.location === city) return val;
  });
}
