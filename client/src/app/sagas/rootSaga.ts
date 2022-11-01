import { addCategoryStart, getCategoriesStart } from '@/app/slices/categorySlice';
import { addProductStart, delProductStart, getProductsStart } from '@/app/slices/productSlice';
import { takeLatest } from 'redux-saga/effects';
import productsSaga from './productsSaga';
import categorySaga from './categorySaga';
import { loginStart, logOut, signUpStart } from '@/app/slices/authSlice';
import authSaga from './authSaga';
import { getProfileStart, updateProfileStart, uploadAvatarStart } from '@/app/slices/profileSlice';
import profileSaga from './profileSaga';
import {
  addOrderStart,
  adminGetOrderStart,
  deleteOrderStart,
  getOrderStart,
  updateOrderStatusStart,
} from '@/app/slices/orderSlice';
import orderSaga from './orderSaga';
import { delUsersStart, getUsersStart } from '@/app/slices/usersSlice';
import usersSaga from './usersSaga';
import { getReviewsStart } from '../slices/reviewsSlice';
import reviewsSaga from './reviewsSaga';

function* rootSaga() {
  yield takeLatest([getProductsStart.type, addProductStart.type, delProductStart.type], productsSaga);
  yield takeLatest([addCategoryStart.type, getCategoriesStart.type], categorySaga);
  yield takeLatest([signUpStart.type, loginStart.type, logOut.type], authSaga);
  yield takeLatest([getProfileStart.type, updateProfileStart.type, uploadAvatarStart.type], profileSaga);
  yield takeLatest(
    [addOrderStart.type, getOrderStart.type, adminGetOrderStart, updateOrderStatusStart, deleteOrderStart],
    orderSaga,
  );
  yield takeLatest([getUsersStart.type, delUsersStart.type], usersSaga);
  yield takeLatest([getReviewsStart.type], reviewsSaga);
}

export default rootSaga;
