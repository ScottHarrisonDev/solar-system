# Solar System Server

This is an Express server which serves up some data about the celestial bodies of our Solar System.

## Install
1. Clone the Git repository.
2. Open a terminal at the project root and run `yarn install`, this will install all the dependencies for the project.
3. From the project root run `yarn start` to start the server. You should see a message to say the 'API Server is running' and if you navigate to http://localhost:8000/celestial-bodies?page=1&perPage=10 you should see a JSON response. You can now develop locally.

## Deploy
1. Ensure your environment has the NODE_ENV set appropriately. This can usually be done within the interface of your hosting platform (AWs, Heroku, Digital Ocean etc.).
2. Clone the Git repository (Some hosting platforms will handle this for you).
3. Run `yarn install` from the project root, this will install all the dependencies for the project.
4. Run `yarn build` from the project root, this will compile the project into JavaScript.
5. Run `node build/index.js` to run the compiled code.

## Tests
1. Build the app by running `yarn build` from the project root.
2. Run `yarn test` from the project root to run tests and view output.

## Endpoints
This API only has a single endpoint:

- `/celestial-bodies` - Returns a list of planets (and star) in our Solar System with some data for each.

Method: GET

Request body parameters: None

Request query parameters: 
- `page` [number]: The page you wish to view data from
- `perPage` [number]:  The amount of planets you wish to see per page

Response format: JSON
