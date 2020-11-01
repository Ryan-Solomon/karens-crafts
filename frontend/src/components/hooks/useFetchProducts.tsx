import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { ProductData } from '../../types/types';

const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data }: AxiosResponse<ProductData[]> = await axios.get(
        '/api/products'
      );
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return { products };
};

export default useFetchProducts;
