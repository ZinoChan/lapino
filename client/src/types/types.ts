import { ICart } from 'app/slices/cartSlice';

export interface IProduct {
  title: string;
  description: string;
  details: string;
  image: string;
  subImages: string[];
  brand: string;
  pricing: { originalPrice: number; discountPercentage: number };
  countInStock: number;
  size: string[];
  color: string[];
  specs: {
    countryOfProduction: string;
    weight: number;
    model: string;
  };
  category: string;
}

export interface IProductRes extends IProduct {
  sold: number;
  slug: string;
  _id: string;
  reviews: IReview[];
  rating: number;
  numReviews: number;
}

export interface IError {
  statusCode?: number;
  title?: string;
  type?: string;
  message: string;
  errors?: any[];
}

export interface IReview {
  _id: string;
  userName: string;
  rating: number;
  comment: string;
  productId: string;
  userId: string;
}

export interface ICategory {
  name: string;
  image?: string;
  parent?: string;
  _id?: string;
}

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  isPhoneValidated: boolean;
  city: string;
  address: string;
  zipCode: string;
  avatar: string;
  role: string;
  token: string;
}

export interface IOrder {
  orderItems: ICart[];
  shippingInfo: {
    city: string;
    phone: string;
    isPhoneValidated: boolean;
    address: string;
    zipCode: string;
  };
  paymentMethod: string;
  subTotal: number;
  total: number;
  shippingPrice: number;
  isPaid: boolean;
}

export interface IOrderRes extends IOrder {
  _id: string;
  createdAt: string;
  orderStatus: string;
}

export interface ILoginCredentiels {
  email: string;
  password: string;
}

export interface IAccountCredentiels extends ILoginCredentiels {
  fullName: string;
}
