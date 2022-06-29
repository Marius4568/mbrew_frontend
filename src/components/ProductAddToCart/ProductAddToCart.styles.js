import styled from 'styled-components';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export const ProductAddToCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  button {
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const QuantityLabel = styled.div`
  background-color: #d9d9d9;
  display: grid;
  place-items: center;
  padding: 0.85rem 2rem;
  font-weight: 500;
  border-radius: 0.2rem;
  width: calc(100% - 4rem);

  @media screen and (min-width: 1200px) {
    /* padding: 0; */
  }
`;

export const QuantityHandling = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const IncreaseQuantity = styled(AddIcon)`
  cursor: pointer;
  font-weight: 800;
`;

export const Quantity = styled.div`
  font-weight: 500;
  margin: 0 1rem;
  font-size: 1.1rem;
`;

export const DecreaseQuantity = styled(RemoveIcon)`
  cursor: pointer;

  font-weight: 800;
`;
