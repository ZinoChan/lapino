import path from 'path';
import App from './app';
import CategoryRoute from './components/categories/categoryRoute';
import OrderRoute from './components/orders/orderRoute';
import ProductsRoute from './components/products/productRoute';
import ReviewRoute from './components/reviews/reviewRoute';
import UserRoute from './components/users/userRoute';
import { NODE_ENV } from './config';

const app = new App([new ProductsRoute(), new UserRoute(), new ReviewRoute(), new OrderRoute(), new CategoryRoute()]);

if (NODE_ENV === 'production') {
  app.getServer().get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html')));
}

app.listen();

process.on('unhandledRejection', (err: NodeJS.ErrnoException) => {
  console.log(`Error : ${err.message}`);
});
