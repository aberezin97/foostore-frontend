import React from 'react';
import { Link } from 'react-router-dom';
import PageAuth from '../../components/page-auth';
import PageCenter from '../../components/page-center';
import ROUTES from '../../routes';

const SignUpPage = () => {
  return (
    <PageCenter>
      <PageAuth header="Sign Up">
        <div>
          <form action="#" method="POST">
            <div className="shadow sm:overflow-hidden sm:rounded-md border border-gray-300">
              <div className="space-y-0 bg-white px-4 sm:px-6 py-3">
                <div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>
              <div className="space-y-0 bg-white px-4 sm:px-6 py-3">
                <div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>
              <div className="space-y-0 bg-white px-4 sm:px-6 py-3">
                <div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password Repeat
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="text-sm flex justify-center items-center">
            <Link
              to={ROUTES.SIGN_IN}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              I have an account
            </Link>
          </div>
        </div>
      </PageAuth>
    </PageCenter>
  );
};

export default SignUpPage;
