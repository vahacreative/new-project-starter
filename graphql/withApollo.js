import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost';

let apolloClient;


const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: `${GRAPHQL_URL}/graphql`,
});

function createApolloClient() {
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo() {
  const pApolloClient = apolloClient || createApolloClient();
  if (!apolloClient) apolloClient = pApolloClient;

  return pApolloClient;
}

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
