


// pages/index.js
import { gql } from 'graphql-request';
import { graphQLClient } from '../../../lib/graphql-client.js';


const QUERY = gql`
  {
    posts {
      title
      slug
      text_LONG
      image
    }
  }
`;



export default async function stories() {
  const { posts }:any = await graphQLClient.request(QUERY);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post:any) => (
          <li>
            <h2>{post.title}</h2>
            <p>{post.text_LONG}</p>
            <p><img src={post.image} alt={post.title} /></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
