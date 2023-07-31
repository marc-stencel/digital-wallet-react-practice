import { redirect } from 'react-router-dom';

import { getDatabase, ref, child, get } from 'firebase/database';

import { getAuthTokenLoader } from './getAuthTokenLoader';

export async function checkAuthLoader() {
  const token = getAuthTokenLoader();

  if (!token) return redirect('/login');

  const userId = localStorage.getItem('userId');
  const dbRef = ref(getDatabase());

  let userData;

  await get(child(dbRef, `users/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) userData = snapshot.val();
    })
    .catch(() => {
      throw json({ message: 'User is not authorized' }, { status: 401 });
    });

  return userData;
}
