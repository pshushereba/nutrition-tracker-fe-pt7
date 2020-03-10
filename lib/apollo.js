import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Cookie from "js-cookie";

export default withApollo(
  ({ initialState, headers }) => {
    let token = Cookie.get("token");
    return new ApolloClient({
      uri: `https://labspt7-nutrition-tracker-be.herokuapp.com`,
      cache: new InMemoryCache().restore(initialState || {}),
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
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
