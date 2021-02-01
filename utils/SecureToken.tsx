// this package works only with react-native-sensitive-info which is not supported with EXPO
import SInfo from 'react-native-sensitive-info';
import { graphql_fetcher } from './api';

const BASICTOKEN = 'basictoken';
const USERTOKEN = 'usertoken';
const SHARED_PERFS = 'polytekniskForeningSharedPrefs';
const KEYCHAIN_SERVICE = 'polytekniskForeningKeychain';
const keyChainOptions = {
  sharedPreferencesName: SHARED_PERFS,
  keychainService: KEYCHAIN_SERVICE,
};

export async function getItem<T>(key: string): Promise<T | null> {
  const value = await SInfo.getItem(key, keyChainOptions);
  console.log("getItem value: " + value);
  return value ? JSON.parse(value)?.[key] || null : null;
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  SInfo.setItem(key, JSON.stringify({[key]: value}), keyChainOptions);
}
export async function removeItem(key: string): Promise<void> {
  SInfo.deleteItem(key, keyChainOptions);
}

// BASICTOKEN provides a basic role to interact with the backend 
export const getBasicToken = () => getItem<string>(BASICTOKEN);
// export const removeBasicToken = () => removeItem(BASICTOKEN); // it should not be nessecary to remove the BasicToken
export const setBasicToken = (value: string) => setItem<string>(BASICTOKEN, value);

// USERTOKEN is not implemented yet. But may provide a user role to extend the backend interaction domain.
export const getUserToken = () => getItem<string>(USERTOKEN);
export const removeUserToken = () => removeItem(USERTOKEN);
export const setUserToken = (value: string) => setItem<string>(USERTOKEN, value);

// contact backend to get new basicToken
// app should know basic device authentication credentials
export const fetchBasicToken = async () => {
  const query: string = `
    mutation {
        login(input: { identifier: "app@pf.dk", password: "app123" }) {
        jwt
        }
    }`;
    const response = await graphql_fetcher(query)
    return response ? response.login.jwt : undefined
}