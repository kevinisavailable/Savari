import { ID } from 'appwrite'
import { account } from './AppwriteConfig';

export async function createPhoneSession(number){
    var uniqueId = ID.unique();
    var phoneNo = number;

    try {
        const promise = await account.createPhoneSession(uniqueId , phoneNo);
        return promise;
    } catch (error) {
        return error
    }
}

export async function updatePhoneSession(userId , otp , name){
    
    try {
        const promise = await account.updatePhoneSession(userId , otp)
        await account.updateName(name)
        return promise;
    } catch (error) {
        return error;
    }
}