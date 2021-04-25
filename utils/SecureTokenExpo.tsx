// this file is made entirely for expo's version of sensitive information
import * as SecureStore from 'expo-secure-store'
import { graphql_fetcher } from './api';

const BASICTOKEN = 'basictoken';
const USERTOKEN = 'usertoken';
const SHARED_PERFS = 'polytekniskForeningSharedPrefs';
const KEYCHAIN_SERVICE = 'polytekniskForeningKeychain';
const keyChainOptions = {
  sharedPreferencesName: SHARED_PERFS,
  keychainService: KEYCHAIN_SERVICE,
};

export async function getItem(key: string): Promise<string | null> {
  const value = await SecureStore.getItemAsync(key);
  return value ? value : null;
}

export async function setItem(key: string, value: string): Promise<void> {
  SecureStore.setItemAsync(key, value);
}
export async function removeItem(key: string): Promise<void> {
  SecureStore.deleteItemAsync(key);
}

// BASICTOKEN provides a basic role to interact with the backend 
export const getBasicToken = () => getItem(BASICTOKEN);
// export const removeBasicToken = () => removeItem(BASICTOKEN); // it should not be nessecary to remove the BasicToken
export const setBasicToken = (value: string) => setItem(BASICTOKEN, value);

// USERTOKEN is not implemented yet. But may provide a user role to extend the backend interaction domain.
export const getUserToken = () => getItem(USERTOKEN);
export const removeUserToken = () => removeItem(USERTOKEN);
export const setUserToken = (value: string) => setItem(USERTOKEN, value);

// contact backend to get new basicToken
// app should know basic device authentication credentials
export const fetchBasicToken = async () => {
  const query: string = `
    mutation {
        login(input: { identifier: "app.mobile@pf.dk", password: "pfmobileapplication2021" }) {
        jwt
        }
    }`;
    const response = await graphql_fetcher(query)
    return response ? response.login.jwt : undefined
}