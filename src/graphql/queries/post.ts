import { gql } from "graphql-request";

export const GET_POST_BY_SLUG = gql`
  query MyQuery($slug: String) {
    post(stage: PUBLISHED, where: { slug: $slug }) {
      id
      title
      slug
      updatedAt
      createdAt
      htmlCode
      cssCode
      javascriptCode
      content
    }
  }
`;
