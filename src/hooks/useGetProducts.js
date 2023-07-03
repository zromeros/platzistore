import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [getProducts, setGetProducts] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios(API);
      const validData = response.data.filter((product) => product?.images[0]?.includes('https://'));
      setProducts(validData);
    };

    if (getProducts) {
      fetchProducts();
      setGetProducts(false);
    }
  }, [getProducts, API]);
  return products;
};

export default useGetProducts;
