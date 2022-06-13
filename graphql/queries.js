import { gql } from "@apollo/client";

export const getCharacters = (filter) => {
  return gql`
            query {
              characters(page: ${filter}) {
                results {
                  image
                  name
                  species
                }
                info {
                  next
                  pages
                  prev
                }
              }
            }
        `;
};
