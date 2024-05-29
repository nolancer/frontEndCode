// src\redux\features\auth\registerSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { AuthRegisterState } from './types';

const initialState: AuthRegisterState = {
    authData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: null,
        country: "",
        createdAt: null,
        updatedAt: null,
        accountType: null,
        emailVerified: false,
        image: "",
        isTwoFactorEnabled: false,
        twoFactorConfirmationType: null
    },
    isSocialLoginInitiated: false
};

export const createNewUserSlice = createSlice({
    name: 'createNewJob',
    initialState,
    reducers: {
        // setUserRole: (state, action) => {
        //     state.role = action.payload;
        // },
        // setUserName: (state, action) => {
        //     state.userName = action.payload;
        // },
        // setUserEmail: (state, action) => {
        //     state.email = action.payload;
        // },
        // setUserPassword: (state, action) => {
        //     state.password = action.payload;
        // },
        // setUserCountry: (state, action) => {
        //     state.country = action.payload;
        // },
        setInitiateSocialLogin: (state, action) => {
            state.isSocialLoginInitiated = action.payload;
        },
        setAuthData: (state, action) => {
            state.authData = {
                ...state.authData,
                ...action.payload
            }
        }
    },
});

export const {
    // setUserRole,
    // setUserName,
    // setUserEmail,
    // setUserPassword,
    // setUserCountry,
    setInitiateSocialLogin,
    setAuthData
} = createNewUserSlice.actions;

export default createNewUserSlice.reducer;