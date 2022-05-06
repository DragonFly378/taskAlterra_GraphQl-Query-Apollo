import { gql } from "@apollo/client";

export const GetLists = gql`
  query MyQuery {
    todolist {
      id
      title
      completed
    }
  }
`;
