import { json, redirect } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

import { getDatabase, ref, set } from 'firebase/database';

export async function signUpAction({ request }) {
  const data = await request.formData();
  const email = data.get('email');
  const password = data.get('password');

  let userId;

  const userAccountData = {
    address: {
      city: '',
      postalCode: '',
      street: '',
      country: data.get('country'),
    },
    contact: {
      email,
      phone: '',
    },
    marketing: {
      emailOffer: data.get('subscribe') || 'off',
      smsOffer: data.get('subscribe') || 'off',
    },
    personalData: {
      name: data.get('name').toUpperCase(),
      surname: data.get('surname').toUpperCase(),
    },
    settings: {
      currency: data.get('currency'),
      language: '',
      status: 'Active',
    },
  };

  await createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      if (user) {
        userId = auth.currentUser.uid;
      }

      async function writeUserData(id, data) {
        const db = getDatabase();
        await set(ref(db, 'users/' + id), data);
      }

      writeUserData(userId, userAccountData);
      localStorage.setItem('isSignedUp', true);
    })
    .catch(() => {
      throw json({ message: 'Email already in use.' }, { status: 409 });
    });

  if (userId) return redirect('/login');
}
