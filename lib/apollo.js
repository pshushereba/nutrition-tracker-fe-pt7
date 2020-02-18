import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Cookie from "next-cookies";
import { useState, useEffect } from "react";

export default withApollo(
  ({ initialState, ctx, headers }) => {
    const [token, setToken] = useState('')
    console.log('ctx:', ctx, 'headers:', headers)
    useEffect(() => {
      setToken(localStorage.getItem('token'))
      console.log('useEffect')
      console.log('token', token)
    }, []);
    return new ApolloClient({
      uri: "https://labspt7-nutrition-tracker-be.herokuapp.com/",
      cache: new InMemoryCache().restore(initialState || {}),
      headers: {
        ...headers,
        authorization: `Bearer ${token}`

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