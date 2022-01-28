import { gql } from "@apollo/client";
import { request } from "graphql-request";
const GRAPHQL_URL = `${process.env.NEXT_PUBLIC_API_URL}/graphql` || 'https://localhost';


// export const getSinglePage = async (slug) => {
//   const query = gql`
//      query($slug: String!) {
//       page(where: { slug: $slug } ) {BASLIK slug ACIKLAMA ICERIK KAPAK_RESMI{url}}
//     }
//   `;

//   const response = await request(GRAPHQL_URL, query, { slug });

//   return response.page;
// };

