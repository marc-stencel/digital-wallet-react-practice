import { json, redirect } from 'react-router-dom';

import { getAuth, signOut } from 'firebase/auth';

export async function logOutAction() {
  const auth = getAuth();

  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('userName');

  await signOut(auth)
    .then(() => {
      localStorage.setItem('isLogOut', true);
    })
    .catch(() => {
      throw json({ message: 'Something has gone wrong' }, { status: 500 });
    });

  return redirect('/login');
}
