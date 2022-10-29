import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/client";
import { wrapper } from "./store";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
