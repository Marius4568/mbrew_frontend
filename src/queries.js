import { gql } from 'graphql-request';

export const productsQuery = gql`
  query {
    products {
      data {
        attributes {
          title
          description
          slug
          price
          createdAt
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const productQuery = `
query {
  products(filters: {slug :{eq: "kiwi-guru"}}){
    data{
      attributes{
        title
        slug
        description
        price
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`;
