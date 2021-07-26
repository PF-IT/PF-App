//import {APP_ENVIRONMENT, APP_USERNAME, APP_PASSWORD} from 'react-native-dotenv';
module.exports = () => {
    if (process.env.APP_ENVIRONMENT === 'production') {
        console.log("Connecting to production backend...");
        return {
            strapi: "https://appdata.pf.dk",
            strapi_api: "https://appdata.pf.dk/api",
            strapi_graphql: "https://appdata.pf.dk/graphql",
            app_username: process.env.APP_USERNAME,
            app_password: process.env.APP_PASSWORD
        };
    } else if (process.env.APP_ENVIRONMENT === 'staging') {
        console.log("This feature is not implemented!");
        return {
            // STAGING not implemented
            undefined
        };
    } else { // defaults to development
        return {
            strapi: "http://localhost:1337",
            strapi_api: "http://localhost:1337/api",
            strapi_graphql: "http://localhost:1337/graphql",
            app_username: "app@pf.dk",
            app_password: "passwd"
        };
    }
}