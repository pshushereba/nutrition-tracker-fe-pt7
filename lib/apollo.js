import withApollo from "next-with-apollo";
import ApolloClient from "apollo-client";
import { InMemoryCache } from 'apollo-boost';
/*
Changed ApolloClient import from "apollo-boost" to "apollo-client" because I was receiving an error when trying to use link when creating a new ApolloClient. The apollo-boost library is slightly different than apollo-client. Splitting up the imports fixed this error.
https://stackoverflow.com/questions/53478128/apolloboost-was-initialized-with-unsupported-options
*/

import { ApolloProvider } from "@apollo/react-hooks";
import Cookie from "js-cookie";
import cookies from "next-cookies";
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import Websocket from 'isomorphic-ws';
import fetch from 'isomorphic-unfetch';

let authToken;
if (typeof window === undefined) {
  const { token } = cookies("token");
  authToken = token;
} else {
  authToken = Cookie.get("token");
}

let httpLink = new HttpLink({
  uri: 'https://labspt7-nutrition-stage.herokuapp.com/',
  credentials: 'same-origin',
  fetch: fetch,
  headers: {
    authorization: authToken ? `Bearer ${authToken}` : "",
  }
});

const wsLink = process.browser ? new WebSocketLink({ 
  uri: 'wss://labspt7-nutrition-stage.herokuapp.com/',
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${authToken}`
    }
  },
  webSocketImpl: Websocket
}) : null

/*
running process.browser ternary check because wsLink should only be used in the browser. Per https://github.com/apollographql/subscriptions-transport-ws/issues/333
*/

/*
Current issue: The websocket is closing before a connection can be made. Seems like a semi-known issue. Appears to be a problem with the subscriptions-transport-ws dependency library. Tried to use the isomorphic-ws library along with the webSocketImpl attribute instead of the default subscriptions-transport-ws.

*/

const link = process.browser ? split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
) : httpLink;

export default withApollo(
  ({ initialState, headers, ctx }) => {

    return new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(
        { initialState } || {}
      ),
      credentials: "include",
      resolvers: {},
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);

/*
Links for problems encountered (For posterity)
https://github.com/apollographql/subscriptions-transport-ws/issues/377
https://github.com/lfades/next-with-apollo/issues/123
https://github.com/zeit/next.js/issues/10902
https://github.com/apollographql/subscriptions-transport-ws
https://www.howtographql.com/react-apollo/8-subscriptions/
https://github.com/apollographql/subscriptions-transport-ws/issues/333

*/