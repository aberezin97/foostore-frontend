import { createSlice } from '@reduxjs/toolkit';

interface ISectionItem {
  name: string;
  href: string;
}

interface ISection {
  id: string;
  name: string;
  items: ISectionItem[];
}

interface IFeatured {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ICategory {
  id: string;
  name: string;
  featured: IFeatured[];
  sections: ISection[];
}

export interface IProduct {
  id: number;
  name: string;
  href: string;
  color: string;
  price: number;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
}

export interface IStoreState {
  categories: ICategory[];
  products: IProduct[];
}

const initialState: IStoreState = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.'
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
        }
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '/women-tops/' },
            { name: 'Dresses', href: '/women-dresses/' },
            { name: 'Pants', href: '/women-pants/' },
            { name: 'Denim', href: '/women-denim/' },
            { name: 'Sweaters', href: '/women-sweaters/' },
            { name: 'T-Shirts', href: '/women-t-shirts/' },
            { name: 'Jackets', href: '/women-jackets/' },
            { name: 'Activewear', href: '/women-activewear/' },
            { name: 'Browse All', href: '/women-all/' }
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '/women-watches/' },
            { name: 'Wallets', href: '/women-wallets/' },
            { name: 'Bags', href: '/women-bags/' },
            { name: 'Sunglasses', href: '/women-sunglasses/' },
            { name: 'Hats', href: '/women-hats/' },
            { name: 'Belts', href: '/women-belts/' }
          ]
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' }
          ]
        }
      ]
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.'
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.'
        }
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' }
          ]
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' }
          ]
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' }
          ]
        }
      ]
    }
  ],
  products: [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: 48,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      color: '',
      quantity: 1
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: 35,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt:
        'Olive drab green insulated bottle with flared screw lid and flat top.',
      color: '',
      quantity: 1
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: 89,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.',
      color: '',
      quantity: 1
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 35,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt:
        'Hand holding black machined steel mechanical pencil with brass tip and top.',
      color: '',
      quantity: 1
    }
  ]
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {}
});

const storeReducer = storeSlice.reducer;

export default storeReducer;
