import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slices/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { addCategoryStart } from './slices/categorySlice';
import { addProductStart } from './slices/productSlice';
import { uploadAvatarStart } from './slices/profileSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [addCategoryStart.type, addProductStart.type, uploadAvatarStart.type],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
