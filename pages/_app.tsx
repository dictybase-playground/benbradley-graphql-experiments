import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
})

const MyApp = ({ Component }: AppProps) => (
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>
)

export default MyApp
