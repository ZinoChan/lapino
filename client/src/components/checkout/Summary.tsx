import Button from '@/components/UI/Button';
import { CHECKOUT_STEP_1 } from '@/utils/routes';
import { Link } from 'react-router-dom';

interface SummaryProps {
  subTotal: number;
  // tax?: number;
  // delivery: number;
  // total: number;
  showBtn?: boolean;
}

const Summary = ({ subTotal, showBtn = false }: SummaryProps) => {
  return (
    <div className="rounded border border-gray-200 p-4 shadow-md bg-white">
      <h2 className="font-main text-center font-bold mb-4">Summary</h2>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-secondary capitalize">Sub Total</h4>
        <p className="font-bold">{subTotal}MAD</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-secondary capitalize">delivery</h4>
        <p className="font-bold">{5} MAD</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-secondary capitalize">Total</h4>
        <p className="font-bold">{subTotal + 5} MAD</p>
      </div>
      {showBtn && (
        <Button theme="btn-primary" className="w-full uppercase">
          <Link to={CHECKOUT_STEP_1}>process to checkout</Link>
        </Button>
      )}
    </div>
  );
};

export default Summary;
