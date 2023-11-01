import { ID } from 'appwrite'
import { account } from './AppwriteConfig';

export async function getCurrentUser(){
    try {
        const promise = account.get();
        return promise       
    } catch (error) {
        return null;
    }
}

export async function getCurrentSession(){
    try {
        const promise = account.getSession('current');
        return promise
    } catch (error) {
        return null;
    }
}

export async function deleteCurrentSession(){
    try {
        const promise = await account.deleteSession('current')
    } catch (error) {
        return null;
    }
}
export async function createPhoneSession(number , userId){
    var uniqueId = userId ? userId : ID.unique();
    var phoneNo = number;

    try {
        const promise = await account.createPhoneSession(uniqueId , phoneNo);
        return promise;
    } catch (error) {
        return null
    }
}

export async function updatePhoneSession(userId , otp){
    try {
        const promise = await account.updatePhoneSession(userId , otp)
        return promise;
    } catch (error) {
        return null;
    }
}