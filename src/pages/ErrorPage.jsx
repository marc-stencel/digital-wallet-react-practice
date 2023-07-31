import { isRouteErrorResponse, useHref, useRouteError } from 'react-router-dom';

import ErrorLayout from '../components/error/ErrorLayout';
import LogInSection from '../components/logIn/LogInSection';
import Registration from '../components/registration/Registration';
import ErrorElement from '../components/error/ErrorElement';

const ErrorPage = () => {
  const href = useHref();
  const error = useRouteError();

  if (href === '/login' && isRouteErrorResponse(error)) {
    return (
      <ErrorLayout>
        <LogInSection hasError={true} errorMessage={error.data.message} />
      </ErrorLayout>
    );
  }

  if (href === '/register' && isRouteErrorResponse(error)) {
    return (
      <ErrorLayout>
        <Registration hasError={true} errorMessage={error.data.message} />
      </ErrorLayout>
    );
  }

  return (
    <ErrorLayout>
      <ErrorElement />
    </ErrorLayout>
  );
};

export default ErrorPage;
