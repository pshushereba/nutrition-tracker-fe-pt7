import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Cookie from "js-cookie";

const initialDashState = {
  lowerNav: "journal",
  searchResults: "",
  logType: "",
  mealType: "",
  nutritionInfo: ""

}

export default withApollo(
  ({ initialState, headers }) => {
    let token = Cookie.get("token");
    return new ApolloClient({
      uri: `https://labspt7-nutrition-tracker-be.herokuapp.com`,
      cache: new InMemoryCache().restore({ ...initialState, data: initialDashState } || {}),
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        // 'Access-Control-Allow-Origin': '*',
      },
      credentials: "include",
      // fetchOptions: {
      //   mode: 'no-cors'
      // },
      resolvers: {}
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
