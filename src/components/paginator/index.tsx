import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface IPaginatorProps {
  currentPage: number;
  pagesCount: number;
  itemsCount: number;
  baseUrl: string;
}

const Paginator = ({
  currentPage,
  pagesCount,
  itemsCount,
  baseUrl
}: IPaginatorProps) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          to={`${baseUrl}/${currentPage - 1}`}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          to={`${baseUrl}/${currentPage + 1}`}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-medium">{itemsCount}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              to={`${baseUrl}/${currentPage - 1}`}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {[...new Array(pagesCount)].map((_, idx) => (
              <Link
                to={`${baseUrl}/${idx + 1}`}
                aria-current="page"
                className={cn(
                  'relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20',
                  {
                    'z-10 bg-indigo-50 border-indigo-500 text-indigo-600':
                      idx + 1 === currentPage,
                    'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                      idx + 1 !== currentPage
                  }
                )}
              >
                {idx + 1}
              </Link>
            ))}
            <Link
              to={`${baseUrl}/${currentPage + 1}`}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
