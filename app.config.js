module.exports = () => {
    let configuration = new Map();
    switch (process.env.APP_ENVIRONMENT) {
        case 'production':
            configuration.set("strapi", "https://appdata.pf.dk");
            configuration.set("strapi_api", "https://appdata.pf.dk/api");
            configuration.set("strapi_graphql", "https://appdata.pf.dk/graphql");
            configuration.set("app_username", env.process.APP_USERNAME);
            configuration.set("app_password", env.process.APP_PASSWORD);
            break;
        case 'staging':
            throw new Error("Staging mode not yet implemented!");
            break;
        default:
            /* Defaults to development configuration */
            configuration.set("strapi", "http://localhost:1337");
            configuration.set("strapi_api", "http://localhost:1337/api");
            configuration.set("strapi_graphql", "http://localhost:1337/graphql");
            configuration.set("app_username", "app@pf.dk");
            configuration.set("app_password", "passwd");
            break;
    }
    return configuration;
}