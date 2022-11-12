import { ShoppingCartOutlined, DollarOutlined, UserOutlined, LineChartOutlined } from '@ant-design/icons';
import CustomerRating from './components/CustomerRating';
import OrderList from './components/OrderList';
import TopSales from './components/TopSales';
import AdminChart from './components/AdminChart';
import { useAppSelector } from '@/app/store';
import { adminGetOrderStart } from '@/app/slices/orderSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ADMIN_ALL_ORDERS } from '@/utils/routes';
import { Link } from 'react-router-dom';
import Loading from '@/components/loaders/Loading';
import { getReviewsStart } from '@/app/slices/reviewsSlice';

const Dashboard = () => {
  const statistics = [
    {
      title: 'new Orders',
      color: 'primary',
      icon: <ShoppingCartOutlined />,
      total: '12.5k',
    },
    {
      title: 'Total revenu',
      color: 'yellowBeta',
      icon: <DollarOutlined />,
      total: '13k',
    },
    {
      title: 'N° of customers',
      color: 'purpleBeta',
      icon: <UserOutlined />,
      total: '10k',
    },
    {
      title: 'Total Sales',
      color: 'greenBeta',
      icon: <LineChartOutlined />,
      total: '15.5k',
    },
  ];

  const { orders, auth, reviews, isLoadingReviews, isLoadingOrder } = useAppSelector((state) => ({
    orders: state.orders,
    auth: state.auth,
    reviews: state.reviews,
    isLoadingOrder: state.loadingState.isLoadingOrder,
    isLoadingReviews: state.loadingState.isLoadingReviews,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(adminGetOrderStart(auth.token));
    }
    if (reviews.length === 0) {
      dispatch(getReviewsStart(auth.token));
    }
  }, [dispatch, orders.length, auth.token, reviews.length]);

  return (
    <section className="py-4">
      {(isLoadingOrder || isLoadingReviews) && <Loading />}

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center gap-6 mb-12 sm:px-6 px-2 rounded-xl py-6 shadow-md bg-white dark:bg-darkAD">
        {statistics.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`flex items-center justify-center space-x-4 ${index !== 0 && 'border-l border-gray-200'}`}
          >
            <div
              className={`rounded-full flex items-center justify-center w-16 h-16 dark:bg-lightBlack bg-${item.color} bg-opacity-10`}
            >
              <span className={`text-4xl text-${item.color} contents`}>{item.icon}</span>
            </div>
            <h3 className=" p-3 text-gray-500 dark:text-gray-50  text-base mb-2">
              <span> {item.title} </span>
              <span className={`text-${item.color} text-2xl block mt-4 font-bold`}>{item.total}</span>
            </h3>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3  grid-cols-1 lg:gap-10 gap-y-4">
        <div className="lg:col-span-2">
          <AdminChart />
        </div>
        <TopSales />
        <div className="lg:col-span-2">{orders.length && <OrderList showLink orders={orders.slice(-4)} />}</div>
        <CustomerRating reviews={reviews} showLink />
      </div>
    </section>
  );
};

export default Dashboard;
