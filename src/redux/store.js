import { configureStore } from "@reduxjs/toolkit"
// import storage from "redux-persist/lib/storage"
import orderReducer from "./slices/order"

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist"
// const orderPersistConfig = {
//   key: "tickitz:order",
//   storage,
// }

// const persistOrderReducer = persistReducer(orderPersistConfig, orderReducer)

const store = configureStore({
  reducer: {
    order: orderReducer,
    // order: persistOrderReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [REGISTER, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
  //     },
  //   })
  // },
})

// export const persistedStore = persistStore(store)
export default store
