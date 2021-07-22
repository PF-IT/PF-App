module.exports = () => {
    if (process.env.APP_ENVIRONMENT === 'production') {
        return {
            strapi: "https://appdata.pf.dk",
            strapi_api: "https://appdata.pf.dk/api",
            strapi_graphql: "https://appdata.pf.dk/graphql",
            app_username: env.process.APP_USERNAME,
            app_password: env.process.APP_PASSWORD
        };
    } else if (process.env.APP_ENVIRONMENT = 'staging') {
        return {
            // STAGING not implemented
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