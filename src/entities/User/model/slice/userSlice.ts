import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALESTORAGE_KEY } from 'shared/const/localeStorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authDate = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALESTORAGE_KEY);
            if (user) state.authDate = JSON.parse(user);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
