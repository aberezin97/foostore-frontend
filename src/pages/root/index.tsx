import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar, { Link } from '../../components/navbar';
import Cart from '../../components/cart';
import { useAppSelector } from '../../store';
import ROUTES from '../../routes';

const unauthenticatedUserLinks: Link[] = [
  {
    name: 'Sign In',
    url: ROUTES.SIGN_IN
  },
  {
    name: 'Create an Account',
    url: ROUTES.SIGN_UP
  },
  {
    name: 'Forgot Password',
    url: ROUTES.RESET_PASSWORD
  }
];

const authenticatedUserLinks: Link[] = [
  {
    name: 'Your Profile',
    url: ROUTES.PROFILE
  },
  {
    name: 'Settings',
    url: ROUTES.SETTINGS
  },
  {
    name: 'Sign Out',
    url: ROUTES.SIGN_OUT
  }
];

const RootPage = () => {
  const { info, cart } = useAppSelector((state) => state.user);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  return (
    <>
      <Navbar
        userLinks={info ? authenticatedUserLinks : unauthenticatedUserLinks}
        userImageUrl={info?.imageUrl}
        onCartIconClick={() => setIsCartOpen(true)}
      />
      <Cart products={cart} open={isCartOpen} setOpen={setIsCartOpen} />
      <Outlet />
    </>
  );
};

export default RootPage;
