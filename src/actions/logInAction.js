import { redirect } from 'react-router-dom';

export async function logInAction({ request }) {
  const data = await request.formData();
  const userLogIn = {
    email: data.get('email'),
    password: data.get('password'),
  };
  console.log(userLogIn);
  return redirect('..');
}
