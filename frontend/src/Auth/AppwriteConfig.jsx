import { Client, Account } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6541fc81113916cb91fa');
    
export const account = new Account(client);
