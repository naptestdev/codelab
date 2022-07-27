import { gql } from "graphql-request";

export const GET_HOME_DATA = gql`
  query MyQuery {
    sections {
      id
      title
      posts {
        ... on Post {
          id
          title
          slug
        }
      }
    }
  }
`;
