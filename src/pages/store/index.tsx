import React from 'react';
import Categories from '../../components/categories';
import { useAppSelector } from '../../store';
import ROUTES from '../../routes';
import { useParams } from 'react-router-dom';
import Products from '../../components/products';

const StorePage = () => {
  const { categories, products } = useAppSelector((state) => state.store);
  const { category, page } = useParams();
  return (
    <>
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>
      <Categories categories={categories} baseUrl={ROUTES.STORE} />
      <Products products={products} />
    </>
  );
};

export default StorePage;
