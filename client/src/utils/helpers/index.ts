import {  IProductRes } from "@/types/types";

export const calculateDiscount = (originalPrice: number, discountPercentage: number = 0) =>
  originalPrice - (originalPrice * discountPercentage) / 100;

export function compareObjs(a: any, b: any) {
  let diffrence: any = {};
  for (const key in a) {
    if (a[key] !== b[key]) {
      diffrence[key] = a[key];
    }
  }
  return diffrence;
}

export const calcSubTotal = (cart: any) => {
  if (cart.length !== 0) {
    return cart
      .reduce((sum: any, i: any) => {
        return sum + i.price * i.qty;
      }, 0)
      .toFixed(2);
  }
};

export const displayTime = (timestamp: string) => {
  const date = new Date(timestamp);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours() + ':' + date.getMinutes();
  return `${monthNames[monthIndex]} ${day}, ${year} at ${hour}`;
};

export const productData = (data: any) => ({
  title: data.title,
  description: data.description,
  details: data.details,
  image: data.image,
  subImages: data.subImages,
  brand: data.brand,
  pricing: { originalPrice: data.originalPrice, discountPercentage: data.discountPercentage },
  countInStock: data.countInStock,
  size: data.size || [],
  color: data.color || [],
  specs: {
    countryOfProduction: data.countryOfProduction,
    weight: data.weight,
    model: data.model,
  },
  category: data.category,
});



export const formVariant = (size?: string | null, color?: string | null) => {
  if(size && color) return `${size}-${color}`
  else if (size) return size
  else if (color) return color
  else return null
}

export const formCartItem = (product: IProductRes, size?: string | null, color?: string | null) => {
  let variant = formVariant(size, color)
  return ({
    title: product.title,
    slug: product.slug,
    productId: product._id,
    image: product.image,
    price: product.pricing.discountPercentage ? calculateDiscount(product.pricing.originalPrice, product.pricing.discountPercentage) : product.pricing.originalPrice,
    qty: 1,
    variant: variant || ''
  });
}