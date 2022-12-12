import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from './store';

export interface IUserInfo {
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export interface IUserState {
  info: IUserInfo | null;
  cart: IProduct[];
}

const initialState: IUserState = {
  info: null,
  cart: [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: 90.0,
      quantity: 1,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt:
        'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: 32.0,
      quantity: 1,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
    },
    {
      id: 3,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: 32.0,
      quantity: 1,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
    },
    {
      id: 4,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: 32.0,
      quantity: 1,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
    }
  ]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

const userReducer = userSlice.reducer;

export default userReducer;
