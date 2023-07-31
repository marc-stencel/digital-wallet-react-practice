import { getDatabase, ref, child, get } from 'firebase/database';

import { getAuthTokenLoader } from './getAuthTokenLoader';

export async function tokenAndUserNameLoader() {
  const token = getAuthTokenLoader();

  if (!token) return null;

  const userId = localStorage.getItem('userId');
  const dbRef = ref(getDatabase());

  let userName;

  await get(child(dbRef, `users/${userId}/personalData/name`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        userName = snapshot.val();
        localStorage.setItem('userName', userName);
      }
    })
    .catch(() => {
      throw json(
        { message: 'The data could not be downloaded' },
        { status: 500 },
      );
    });

  const userData = { token, userName };

  return userData;
}
