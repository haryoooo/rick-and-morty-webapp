// import React from "react";
// import { client } from "../../graphql/client";
// import { getCharacters } from "../../graphql/queries";
// import CardComponent from "../components/CardComponent";

// export default function index({ data }) {
//   return (
//     <div>
//       <CardComponent data={data} />
//     </div>
//   );
// }

// export const getStaticProps = async (context) => {
//   const { data } = await client.query({
//     query: getCharacters,
//   });

//   const { results } = data.characters;
//   return {
//     props: {
//       data: results,
//     },
//   };
// };
