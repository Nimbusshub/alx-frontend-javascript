export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employees) {
      const count = Object.keys(employees).length;
      return count;
    },
  };
  return report;
}
