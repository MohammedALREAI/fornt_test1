import "../styles/index.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
