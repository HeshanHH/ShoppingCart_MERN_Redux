import React from 'react';
import { useState, useEffect } from 'react';
import ProductTable from '../components/ProductTable';
import './AdminProductScreen.css';
import axios from 'axios';

const AdminProductScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchDate() {
      const data = await axios.get('/api/products/');
      return await data;
    }
    fetchDate()
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setProducts(res.data);
          console.log(products);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const heading = [
    'ID',
    'Name',
    'Image Url',
    'Description',
    'Price',
    'In Stock',
    'Action',
  ];

  const fetchData = [
    {
      ID: 1,
      name: 'abc',
      ImageUrl: 'http://example.com/abc1',
      Description: 'des des des1',
      Price: 100.0,
      InStockCount: 10,
    },
    {
      ID: 2,
      name: 'abc2',
      ImageUrl: 'http://example.com/abc2',
      Description: 'des des des2',
      Price: 200.0,
      InStockCount: 20,
    },
    {
      ID: 3,
      name: 'abc3',
      ImageUrl: 'http://example.com/abc3',
      Description: 'des des des3',
      Price: 300.0,
      InStockCount: 30,
    },
    {
      ID: 4,
      name: 'abc4',
      ImageUrl: 'http://example.com/abc4',
      Description: 'des des des4',
      Price: 400.0,
      InStockCount: 40,
    },
    {
      ID: 5,
      name: 'abc5',
      ImageUrl: 'http://example.com/abc5',
      Description: 'des des des5',
      Price: 500.0,
      InStockCount: 50,
    },
  ];

  return (
    <div>
      <h1>Addmin Product</h1>
      <ProductTable
        tableHeadings={heading}
        tabledata={products}
        isEdit="true"
        isDelete="true"
      ></ProductTable>
    </div>
  );
};

export default AdminProductScreen;
