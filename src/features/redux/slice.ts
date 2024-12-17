import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LocalState = {
  account: AccountState | null;
  character: CharacterState;
  progress: []
};

export type AccountState = {
  id: string | '0';
  name: string | 'Andrey';
};

export type CharacterState = {
  type: number | null;
  name: string | null;
  xp: number;
}

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
  progress: []
};

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount(state, action: PayloadAction<AccountState>) {
      state.account.id = action.payload.id;
      state.account.name = action.payload.name;
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

export const accountActions = slice.actions;
export const selectRedux = (state: { account: LocalState }) => state.account;
export default slice.reducer;