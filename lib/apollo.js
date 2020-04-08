import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Cookie from "js-cookie";
import cookies from 'next-cookies'

const initialDashState = {
  lowerNav: "journal",
  searchResults: "",
  logType: "",
  mealType: "",
  nutritionInfo: "",
};

export default withApollo(
  ({ initialState, headers, ctx }) => {
    let authToken
    if (ctx) {
      const { token } = cookies("token")
      authToken = token
    } else {
      authToken = Cookie.get("token")
    }
    let token = Cookie.get("token");
    return new ApolloClient({
      uri: `https://labspt7-nutrition-tracker-be.herokuapp.com`,
      cache: new InMemoryCache().restore(
        { ...initialState, data: initialDashState } || { data: initialDashState }
      ),
      headers: {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : "",
      },
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
