import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: process.env.REACT_APP_SERVER_GRAPHQL,
//   cache: new InMemoryCache(),
//   headers: {
//     "x-hasura-admin-secret": process.env.REACT_APP_SECRET_KEY,
//   },
// });

const client = new ApolloClient({
  uri: "https://todolist-hafiz.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "pW2HjOlCnFz7eAAOdZAt57SmA1ZKJukrhg9sKaYUd8C10NY4BlpAg6B54QbX6Atv",
  },
});
export default client;
