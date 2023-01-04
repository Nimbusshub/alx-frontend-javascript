// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface extends from Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}
// interface accepts a string as arguement and returns a string
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// export function printTeacher(
//   firstName: string,
//   lastName: string
// ): printTeacherFunction {
//   return (string) => `${firstName[0]}. ${lastName}`;
// }

export const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher('john', 'doe'));
