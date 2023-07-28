import { configureStore } from '@reduxjs/toolkit';
import footerDataReducer from './features/footerData/footerDataSlice';

export default configureStore({
  reducer: {
    footerData: footerDataReducer,
  },
});