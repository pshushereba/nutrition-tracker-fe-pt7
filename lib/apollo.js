import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Cookie from 'js-cookie'

export default withApollo(
  ({ initialState, headers }) => {
    const token = Cookie.get('token')
    console.log('apollo')
    return new ApolloClient({
      uri: "https://labspt7-nutrition-stage.herokuapp.com/",
      cache: new InMemoryCache().restore(initialState || {}),
      headers: {
        ...headers,
        Authorization: token
      },
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