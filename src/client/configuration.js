import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getToken } from '../client/util';


// Apollo links definition, one for http interfaace and the other one
//For context, then concatenate both.

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' });
const authLink = setContext(async (req, { headers }) => {
  const token = await getToken();
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const link = authLink.concat(httpLink);

// Define my client
export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
