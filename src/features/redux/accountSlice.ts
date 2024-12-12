import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AccountState = {
  name: string | null;
  characterName: string | null;
  xp: number;
  error: string | null;
};

const initialState: AccountState = {
  name: null,
  characterName: null,
  xp: 0,
  error: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount(state, action: PayloadAction<{ name: string; characterName: string }>) {
      state.name = action.payload.name;
      state.characterName = action.payload.characterName;
      state.error = null;
    },
    addXp(state, action: PayloadAction<number>) {
      if (state.name) {
        state.xp += action.payload;
      } else {
        state.error = 'User must be logged in to gain XP';
      }
    },
    resetAccount() {
      return initialState;
    },
  },
});

export const accountActions = accountSlice.actions;
export const selectAccount = (state: { account: AccountState }) => state.account;
export default accountSlice.reducer;