export function getAuthTokenLoader() {
  const token = localStorage.getItem('token');

  return token;
}
