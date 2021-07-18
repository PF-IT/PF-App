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