import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILoadingState {
  isLoadingProducts: boolean;
  isLoadingCategory: boolean;
  isLoadingAuth: boolean;
  isLoadingProfile: boolean;
  isLoadingOrder: boolean;
  isLoadingUsers: boolean;
}

const initialState: ILoadingState = {
  isLoadingProducts: false,
  isLoadingCategory: false,
  isLoadingAuth: false,
  isLoadingProfile: false,
  isLoadingOrder: false,
  isLoadingUsers: false,
};

const loadingSlice = createSlice({
  name: 'loadingState',
  initialState,
  reducers: {
    loadingProducts: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingProducts: action.payload };
    },
    loadingCategory: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingCategory: action.payload };
    },
    loadingAuth: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingAuth: action.payload };
    },
    loadingProfile: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingAuth: action.payload };
    },
    loadingOrder: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingOrder: action.payload };
    },
    loadingUsers: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLoadingUsers: action.payload };
    },
  },
});

export const { loadingProducts, loadingCategory, loadingAuth, loadingProfile, loadingOrder, loadingUsers } =
  loadingSlice.actions;

export default loadingSlice.reducer;
