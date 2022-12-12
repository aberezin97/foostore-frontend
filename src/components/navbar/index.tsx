import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
import ROUTES from '../../routes';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';

export interface Link {
  name: string;
  url: string;
}

interface NavbarProps {
  links?: Link[];
  userLinks?: Link[];
  userImageUrl?: string;
  onCartIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultLinks: Link[] = [
  {
    name: 'Store',
    url: ROUTES.STORE
  },
  {
    name: 'Delivery',
    url: ROUTES.DELIVERY
  },
  {
    name: 'About',
    url: ROUTES.ABOUT
  },
  {
    name: 'Contacts',
    url: ROUTES.CONTACTS
  }
];

const Navbar = ({
  links = defaultLinks,
  userLinks = [],
  userImageUrl,
  onCartIconClick
}: NavbarProps) => {
  const location = useLocation();
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile Menu Button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {links.map((link) => (
                      <Link
                        to={link.url}
                        className={cn(
                          'px-3 py-2 rounded-md text-sm font-medium',
                          {
                            'bg-gray-900 text-white':
                              location.pathname === link.url,
                            'text-gray-300 hover:bg-gray-700 hover:text-white':
                              location.pathname !== link.url
                          }
                        )}
                        key={link.url}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-white mr-3"
                  >
                    <span className="mr-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                  </a>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={onCartIconClick}
                >
                  <span className="sr-only">View notifications</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile Dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full bg-gray-300"
                        src={userImageUrl}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userLinks.map((link) => (
                        <Menu.Item key={link.url}>
                          {({ active }) => (
                            <Link
                              to={link.url}
                              className={cn(
                                'block px-4 py-2 text-sm first:rounded-t-md last:rounded-b-md',
                                {
                                  'bg-gray-100':
                                    active && link.url !== location.pathname,
                                  'bg-indigo-600 text-white shadow-lg':
                                    link.url === location.pathname,
                                  'text-gray-700':
                                    link.url !== location.pathname
                                }
                              )}
                              key={link.url}
                            >
                              {link.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {links.map((link) => (
                <Disclosure.Button key={link.url}>
                  <Link
                    to={link.url}
                    className={cn(
                      'block px-3 py-2 rounded-md text-base font-medium',
                      {
                        'bg-gray-900 text-white':
                          link.url === location.pathname,
                        'text-gray-300 hover:bg-gray-700 hover:text-white':
                          link.url !== location.pathname
                      }
                    )}
                    key={link.url}
                  >
                    {link.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
