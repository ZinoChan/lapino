import Summary from 'components/checkout/Summary';
import CartItem from 'components/product/CartItem';
import Button from 'components/UI/Button';
import useCart from 'utils/hooks/useCart';
import CheckoutSteps from './components/CheckoutSteps';
import { FC } from 'react';

const OrderSummary: FC = () => {
  const { cart } = useCart();
  return (
    <section className="py-10">
      <h1 className="text-center text-3xl font-main font-bold mb-4">Order summary</h1>
      <div className=" max-w-screen-md mx-auto bg-white p-4 shadow-md rounded">
        {cart.length > 0 && (
          <>
            <CheckoutSteps current={1} />
            <div className="my-8 grid grid-cols-3 gap-4">
              <div className="col-span-2">
                {cart.map((cartItem) => (
                  <CartItem key={cartItem._id} cartItem={cartItem} />
                ))}
              </div>
              <div>
                <Summary subTotal={132} delivery={5} total={10} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Button theme="btn-outline-rounded">Back to shop</Button>
              <Button theme="btn-rounded">Continue</Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OrderSummary;
