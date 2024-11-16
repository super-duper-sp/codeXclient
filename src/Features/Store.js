import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/AuthSlice';


const Store = configureStore({
  reducer: {
    auth: authReducer,
    // dailyTransactions: dailyTransactionReducer,
    // shop: shopReducer,
    // user: userReducer,
    // dashboard: dashboardReducer,
    // member : memberReducer
  },

});

export default Store;