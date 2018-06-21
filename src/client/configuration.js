import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getToken } from '../client/util';

// Apollo links definition, one for http interface, one for authorization header via jwt

const httpLink = new HttpLink({ uri: 'https://git.heroku.com/volunteer-server.git/graphql' });
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
