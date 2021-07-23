# Run the mobile application
 ```expo start``` alternatively: ```yarn run start``` (Initiate Expo client)

To set environment variable do: ``` APP_ENVIRONMENT=production expo start ```

On Windows prefix the command with: ```npx cross-env```

# Global Configuration
To load correct backend endpoints and app configurations set the APP_ENVIRONMENT environment variable to:
"production"|"staging"(not yet implemented)|< arbitrary value >(results in development)

# Production configuration
To setup the app configuration for production a few environment variables must be set:

# Deployment

# Prerequisites
The Strapi backend must contain an app user with the username: ```app@pf.dk``` both in the dev and production environment

## Common bugs
We are aware of a few issues not yet addressed.

On is the cached JWT token used by the app. After running the emulator locally, one may wish to connect to production. In this case, clean the emulator and its content to fetch a fresh JWT token - else the app won't be able to retrieve content probably.