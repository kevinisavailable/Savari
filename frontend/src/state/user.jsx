import {create} from 'zustand'

export const useUserStore = create((set) => ({
    userStore : {},
    doesSessionExists : false,
    storeUser : (userStore) => set({userStore}),
    storeSession : (doesSessionExists) => set({doesSessionExists})
}))