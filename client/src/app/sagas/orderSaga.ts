import { ISaga, IOrderRes } from '@/types/types';
import { put, call } from 'redux-saga/effects';
import { loadingOrder } from '@/app/slices/loadingSlice';
import { globalError, orderError } from '@/app/slices/errorSlice';
import {
  addOrderStart,
  addOrderSuccess,
  getOrderStart,
  getOrderSuccess,
  adminGetOrderStart,
  adminGetOrderSuccess,
  updateOrderStatusStart,
  updateOrderStatusSuccess,
  deleteOrderStart,
  deleteOrderSuccess,
} from '@/app/slices/orderSlice';
import { addOrder, getOrders, adminGetOrders, updateOrderStatus, deleteOrder } from '@/api/services/orderApi';
import { clearCart } from '@/app/slices/cartSlice';
import toast from 'react-hot-toast';
import { setOrderStatus } from '../slices/globalStateSlice';

function* handleError(err: any) {
  yield put(loadingOrder(false));
  if (err.status >= 500 || !err.status)
    yield put(globalError({ message: err.message || 'Sorry, a server error accured please try again later' }));
  else yield put(orderError({ message: err.message }));
}

function* orderSaga({ type, payload }: ISaga) {
  switch (type) {
    case addOrderStart.type:
      try {
        yield put(loadingOrder(true));
        const order: IOrderRes = yield call(addOrder, payload.newOrder, payload.token);
        yield put(addOrderSuccess(order));
        yield put(setOrderStatus(true));
        yield toast.success('order placed successfully');
        yield put(clearCart());
        yield put(loadingOrder(false));
        yield put(setOrderStatus(false));
      } catch (err) {
        handleError(err);
      }
      break;
    case getOrderStart.type:
      try {
        yield put(loadingOrder(true));
        const order: IOrderRes[] = yield call(getOrders, payload);
        yield put(getOrderSuccess(order));
        yield put(loadingOrder(false));
      } catch (err) {
        handleError(err);
      }
      break;
    case adminGetOrderStart.type:
      try {
        yield put(loadingOrder(true));
        const orders: IOrderRes[] = yield call(adminGetOrders, payload);
        yield put(adminGetOrderSuccess(orders));
        yield put(loadingOrder(false));
      } catch (err) {
        handleError(err);
      }
      break;
    case updateOrderStatusStart.type:
      try {
        yield put(loadingOrder(true));
        const order: IOrderRes = yield call(updateOrderStatus, payload.id, payload.orderStatus, payload.token);
        yield put(updateOrderStatusSuccess(order));
        yield put(loadingOrder(false));
        yield toast.success(`Order Status Updated to ${payload.orderStatus}`);
      } catch (err) {
        handleError(err);
      }
      break;
    case deleteOrderStart.type:
      try {
        yield put(loadingOrder(true));
        const id: string = yield call(deleteOrder, payload.id, payload.token);
        yield put(deleteOrderSuccess(id));
        yield put(loadingOrder(false));
        yield toast.success('Order Deleted');
      } catch (err) {
        handleError(err);
      }
      break;
    default:
      return;
  }
}

export default orderSaga;
