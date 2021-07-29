// === API SECTION ===

import {GraphQLClient, request } from "graphql-request";
import useSWR from "swr";
import Constants from 'expo-constants';

export const baseurl = Constants.manifest?.extra?.strapi;
export const endpoint = Constants.manifest?.extra?.strapi_graphql;
const graphql_client = new GraphQLClient(endpoint);

// fetcher functions
export const graphqlFetchWithToken = (query:any, jwtToken:any ) => {
    graphql_client.setHeader('authorization', `Bearer ${jwtToken}`);
    return graphql_client.request(query);
    // return request('http://172.23.49.4:1337/graphql', query, {Authorization: `Bearer ${jwtToken}`})
}

export const graphql_fetcher = (query: any) => request(Constants.manifest?.extra?.strapi_graphql, query);
export const rest_fetcher = (url: any) => fetch(url).then(res => res.json());

// // TODO: should be saved in state somewhere!
// var shouldFetch = true;

// // function to receive jwt token using a user with the Basic/MobileApp role
// export function getToken() {
//     const query: string = `
//     mutation {
//         login(input: { identifier: "app.mobile@pf.dk", password: "pfmobileapplication2021" }) {
//         jwt
//         }
//     }`;
//     const { data, error } = useSWR(() => shouldFetch ? query : null, graphql_fetcher)

//     // temp solution to only get one token
//     if (data) {
//         shouldFetch = false;
//     }

//     return {
//         token: data ? data.login.jwt : undefined,
//         isLoading: !error && !data,
//         isError: error
//     }
// };