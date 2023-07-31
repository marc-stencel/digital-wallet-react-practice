import { getDatabase, ref, update } from 'firebase/database';

export async function editDataAction({ request }) {
  const data = await request.formData();
  const userId = localStorage.getItem('userId');
  const db = getDatabase();

  if (data.has('names')) {
    const name = data.get('name').toUpperCase();
    const surname = data.get('surname').toUpperCase();

    await update(ref(db, 'users/' + userId + '/personalData'), {
      name,
      surname,
    })
      .then(() => {
        localStorage.setItem('userName', name);
        localStorage.setItem('form', 'names');
      })
      .catch(() => {
        throw json({ message: 'Something has gone wrong' }, { status: 500 });
      });

    return null;
  }

  if (data.has('address')) {
    const city = data.get('city');
    const country = data.get('country');
    const street = data.get('street');
    const postalCode = data.get('postalCode');

    await update(ref(db, 'users/' + userId + '/address'), {
      city,
      country,
      street,
      postalCode,
    })
      .then(() => {
        localStorage.setItem('form', 'address');
      })
      .catch(() => {
        throw json({ message: 'Something has gone wrong' }, { status: 500 });
      });

    return null;
  }

  if (data.has('telephone')) {
    const phone = data.get('phone');

    await update(ref(db, 'users/' + userId + '/contact'), {
      phone,
    })
      .then(() => {
        localStorage.setItem('form', 'telephone');
      })
      .catch(() => {
        throw json({ message: 'Something has gone wrong' }, { status: 500 });
      });

    return null;
  }

  if (data.has('setCurrency')) {
    const currency = data.get('currency');

    await update(ref(db, 'users/' + userId + '/settings'), {
      currency,
    })
      .then(() => {
        localStorage.setItem('form', 'setCurrency');
      })
      .catch(() => {
        throw json({ message: 'Something has gone wrong' }, { status: 500 });
      });

    return null;
  }

  if (data.has('setLanguage')) {
    const language = data.get('language');

    await update(ref(db, 'users/' + userId + '/settings'), {
      language,
    })
      .then(() => {
        localStorage.setItem('form', 'setLanguage');
      })
      .catch(() => {
        throw json({ message: 'Something has gone wrong' }, { status: 500 });
      });

    return null;
  }

  if (data.has('marketing')) {
    const emailOffer = data.get('emailOffer');
    const smsOffer = data.get('smsOffer');

    await update(ref(db, 'users/' + userId + '/marketing'), {
      emailOffer: emailOffer || 'off',
      smsOffer: smsOffer || 'off',
    })
      .then(() => {
        localStorage.setItem('form', 'marketing');
      })
      .catch(() => {
        throw json({ message: 'Something has gone wrong' }, { status: 500 });
      });

    return null;
  }

  return null;
}
