import { gql } from "graphql-request";

export const GET_HOME_DATA = gql`
  query {
    posts(stage: PUBLISHED) {
      id
      title
      slug
      updatedAt
      createdAt
    }
  }
`;
