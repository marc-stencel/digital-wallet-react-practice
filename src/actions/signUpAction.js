import { redirect } from 'react-router-dom';

export async function signUpAction({ request }) {
  const data = await request.formData();
  const userSignUp = {
    name: data.get('name').toUpperCase(),
    surname: data.get('surname').toUpperCase(),
    country: data.get('country'),
    currency: data.get('currency'),
    email: data.get('email'),
    password: data.get('password'),
    subscribe: data.get('subscribe') || 'off',
  };
  console.log(userSignUp);
  return redirect('/login');
}
