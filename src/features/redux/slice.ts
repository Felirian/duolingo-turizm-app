import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Использует localStorage
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Типы состояния
export type LocalState = {
  account: AccountState | null;
  character: CharacterState;
  progress: [];
};

export type AccountState = {
  id: string | '0';
  name: string | 'Andrey';
};

export type CharacterState = {
  type: number | null;
  name: string | null;
  xp: number;
};

// Начальное состояние
const initialState: LocalState = {
  account: {
    id: '0',
    name: 'Andrey',
  },
  character: {
    type: null,
    name: null,
    xp: 0,
  },
  progress: [],
};

// Создаем слайс
const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount(state, action: PayloadAction<AccountState>) {
      state.account = action.payload;
    },
    addXp(state, action: PayloadAction<number>) {
      if (state.character.name) {
        state.character.xp += action.payload;
      } else {
        console.error('User must be logged in to gain XP');
      }
    },
    resetAccount() {
      return initialState;
    },
  },
});

export const accountActions = slice.actions;

// Конфигурация redux-persist
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage, // localStorage
  whitelist: ['account'], // Указываем, какие части состояния сохранять
};

const rootReducer = combineReducers({
  account: slice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Конфигурация хранилища
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Селектор
export const selectRedux = (state: { account: LocalState }) => state.account;

export default slice.reducer;
