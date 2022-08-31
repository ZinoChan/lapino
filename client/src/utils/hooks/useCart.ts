import { addToCart, ICart, minusQtyItem, addQtyItem, removeFromCart, clearCart, incrementVariant, decrementVariant, addNewVariant } from '@/app/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { ICartItem, IVariant } from '@/types/types';
import toast from 'react-hot-toast';

const useCart = () => {
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const findItem = (id: String) => cart.find((item: ICart) => item.productId === id);
  const isItemInCart = (id: string) => !!findItem(id);
 

  const onAddToCart = (cartItem: ICartItem) => {
    if (isItemInCart(cartItem.productId)) {
      if (cartItem?.variant) {
          onIncrementVariant(cartItem.productId,cartItem.variant.key)
      } else {
        dispatch(addQtyItem(cartItem.productId));
      }

      toast.success('Product Added to cart');
    } else {
      
      dispatch(addToCart(cartItem));
      toast.success('Product Added to cart');
    }
  };

  const onAddVariant = (id: string, variant: IVariant) => {  
      dispatch(addNewVariant({id, variant}))
      toast.success('Product Added to cart');
  };


  const onIncrementVariant = (id: string, variantKey: string) => {
    dispatch(incrementVariant({id, variantKey}))
  }

  const onDecrementVariant = (id: string, variantKey: string) => {
    if (findItem(id)?.qty === 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decrementVariant({id, variantKey}));
    }
  }

  const onMinusQty = (id: string) => {
    if (isItemInCart(id)) {
      if (findItem(id)?.qty === 1) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(minusQtyItem(id));
      }
    }
  };

  const onAddQty = (id: string) => {
    dispatch(addQtyItem(id));
  };

  const onRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success('product removed from cart');
  };

  const onClearCart = () => {
    dispatch(clearCart());
  };

  return { cart, 
    isItemInCart, 
    onAddToCart, 
    onRemoveFromCart, 
    onMinusQty, 
    onAddQty, 
    onClearCart, 
    findItem, 
    onIncrementVariant,
    onDecrementVariant,
    onAddVariant
  };
};

export default useCart;
