import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((body) => {
      console.log(`${body[1].body} ${body[0].firstName} ${body[0].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
