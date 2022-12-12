import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ROUTES from './routes';
import './index.css';

import ErrorPage from './pages/error';
import RootPage from './pages/root';
import SignInPage from './pages/sign-in';
import SignUpPage from './pages/sign-up';
import ResetPasswordPage from './pages/reset-password';
import DeliveryPage from './pages/delivery';
import ContactsPage from './pages/contacts';
import StorePage from './pages/store';
import ProfilePage from './pages/profile';
import SettingsPage from './pages/settings';
import AboutPage from './pages/about';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.SIGN_IN,
        element: <SignInPage />
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUpPage />
      },
      {
        path: ROUTES.RESET_PASSWORD,
        element: <ResetPasswordPage />
      },
      {
        path: ROUTES.DELIVERY,
        element: <DeliveryPage />
      },
      {
        path: ROUTES.CONTACTS,
        element: <ContactsPage />
      },
      {
        path: ROUTES.STORE,
        element: <StorePage />
      },
      {
        path: `${ROUTES.STORE}/:page/`,
        element: <StorePage />
      },
      {
        path: `${ROUTES.STORE}/:category/:page/`,
        element: <StorePage />
      },
      {
        path: `${ROUTES.STORE}/:category/`,
        element: <StorePage />
      },
      {
        path: ROUTES.PROFILE,
        element: <ProfilePage />
      },
      {
        path: ROUTES.SETTINGS,
        element: <SettingsPage />
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
