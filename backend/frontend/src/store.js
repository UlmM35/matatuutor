import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import userReducer from "./reducers/userReducer"
import teacherReducer from "./reducers/teacherReducer"
import bookingReducer from "./reducers/bookingReducer"
import usersReducer from "./reducers/usersReducer"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['teachers']
}

const rootReducer = combineReducers({
  user: userReducer,
  teachers: teacherReducer,
  bookings: bookingReducer,
  users: usersReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
})

export const persistor = persistStore(store)