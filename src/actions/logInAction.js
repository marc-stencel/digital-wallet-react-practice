import { json, redirect } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export async function logInAction({ request }) {
  const logInData = await request.formData();
  const email = logInData.get('email');
  const password = logInData.get('password');
  const auth = getAuth();

  let token;

  await signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      if (user) {
        token = user.accessToken;
        const userId = user.uid;

        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
      }
    })
    .catch(() => {
      throw json(
        { message: 'Your email or password is incorrect. Try again.' },
        { status: 401 },
      );
    });

  if (token) return redirect('/dashboard');
}
