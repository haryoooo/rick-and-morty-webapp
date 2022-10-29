import { gql } from "@apollo/client";

export const getCharacters = (page, filter) => {
  return gql`
            query {
              characters(${
                !filter ? `page: ${page}` : `page: ${page}, filter: ${filter}`
              }) {
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
