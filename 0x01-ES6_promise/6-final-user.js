import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ])
    .then((statuses) => {
      const newArray = [];
      statuses.forEach((stat) => {
        if (stat.status === 'fulfilled') {
          newArray.push({ status: stat.status, value: stat.value });
        } else {
          newArray.push({
            status: stat.status,
            value: `Error: ${stat.reason.message}`,
          });
        }
      });
      return newArray;
    })
    .catch(() => new Error('Error while processing request'));
}
