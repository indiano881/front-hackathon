import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clyh94fbu012707wdi6nn33ao/master",
    cache: new InMemoryCache()
})

export default client;