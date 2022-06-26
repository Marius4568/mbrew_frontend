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
          colorScheme
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

export const productQuery = (slug) => {
  return gql`
query {
  products(filters: {slug :{eq: "${slug}"}}){
    data{
      attributes{
        title
        slug
        description
        price
        colorScheme
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
};
