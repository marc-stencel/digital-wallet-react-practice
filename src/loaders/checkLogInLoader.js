import { redirect } from 'react-router-dom';

import { getAuthTokenLoader } from './getAuthTokenLoader';

export function checkLogInLoader() {
  const token = getAuthTokenLoader();

  if (token) return redirect('/dashboard');

  return null;
}
