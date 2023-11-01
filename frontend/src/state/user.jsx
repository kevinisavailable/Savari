import {create} from 'zustand'

export const useUserStore = create((set) => ({
    userStore : {},
    doesSessionExists : false,
    role : "",
    storeUser : (userStore) => set({userStore}),
    storeSession : (doesSessionExists) => set({doesSessionExists}),
    storeRole : (role) => set({role})
}))