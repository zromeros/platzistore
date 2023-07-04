import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios(API);
      const validData = response.data.filter((product) => product?.images[0]?.includes('https://'));
      setProducts(validData);
    };
    fetchProducts();
  }, [API]);
  return products;
};

export default useGetProducts;
