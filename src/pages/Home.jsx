import React from 'react';

import { useQuery } from 'react-query';
import { request } from 'graphql-request';
import { productsQuery } from '../queries';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  const { data, status } = useQuery('tests', () => {
    return request(process.env.REACT_APP_STRAPI_BACKEND_API_LINK, productsQuery);
  });

  console.log(status, data);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error :(</div>;
  }

  return (
    <div>
      {data.products.data.map((product) => {
        const { title, description, price, slug } = product.attributes;
        const imageSrc = product.attributes.image.data.attributes.formats.small.url;
        return (
          <div key={slug}>
            {' '}
            <img onClick={() => handleClick(slug)} src={imageSrc} alt="" />
            <p>{title}</p>
            <p>{description}</p>
            <p>${price}</p>
            <p>{slug}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
