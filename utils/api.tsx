// === API SECTION ===

import {GraphQLClient, request } from "graphql-request";
import useSWR from "swr";

export const baseurl = 'http://172.23.49.4:1337';
export const endpoint = 'http://172.23.49.4:1337/graphql';
const graphql_client = new GraphQLClient(endpoint);


// fetcher functions
export const graphqlFetchWithToken = (query:any, jwtToken:any ) => {
    graphql_client.setHeader('authorization', `Bearer ${jwtToken}`);
    return graphql_client.request(query);
    // return request('http://172.23.49.4:1337/graphql', query, {Authorization: `Bearer ${jwtToken}`})
}

export const graphql_fetcher = (query: any) => request('http://172.23.49.4:1337/graphql', query);
export const rest_fetcher = (url: any) => fetch(url).then(res => res.json());

// TODO: should be saved in state somewhere!
var shouldFetch = true;

// function to receive jwt token using a user with the Basic/MobileApp role
export function getToken() {
    const query: string = `
    mutation {
        login(input: { identifier: "app@pf.dk", password: "pf2021" }) {
        jwt
        }
    }`;
    const { data, error } = useSWR(() => shouldFetch ? query : null, graphql_fetcher)

    // temp solution to only get one token
    if (data) {
        shouldFetch = false;
    }

    return {
        token: data ? data.login.jwt : undefined,
        isLoading: !error && !data,
        isError: error
    }
};

function validateToken(token:string|undefined) {
    if (token === undefined) {
        return undefined;
    }

    // return token if it is valid against backend
    return token;
}

function getPersistentToken() {
    return undefined;
}

// check if device has a valid jwt token. Else get a new one.
// useSWR should depent on this function before making requests
export function tokenExist() {
    // check if token exists
    var jwt:string|undefined = getPersistentToken();

    // if undefined download new one
    if (jwt === undefined) {
        const { token, isLoading, isError } = getToken();
        jwt = token;
    }

    // validate jwt token
    return validateToken(jwt);
}

  // function getImportantMessage(jwt_token: string) {
//   const header: string = `{ "Authorization": "Bearer ${jwt_token}" }`;
//   const query: string = `
//   query{
//     importantMessage {
//       created_at
//     }
//   }`;
//   const { data, error } = useSWR([query, header], graphql_fetcher);
//   try {
//     console.log(data);
//   } catch (error) {

//   }
//   return {
//     token: data,
//     isError: error
//   }
// };