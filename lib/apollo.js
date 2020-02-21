import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Cookie from 'js-cookie'

export default withApollo(
  ({ initialState, headers }) => {
    const user = Cookie.get('user')
    console.log('user', user)
    const token = false
    return new ApolloClient({
      uri: `https://labspt7-nutrition-tracker-be.herokuapp.com`,
      cache: new InMemoryCache().restore(initialState || {}),
      // headers: {
        // ...headers,
        // Authorization: token ? `Bearer ${token}` : ""
      // },
      credentials: 'include'
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
//'https://labspt7-nutrition-tracker-be.herokuapp.com'
// `https://labspt7-nutrition-stage.herokuapp.com/`