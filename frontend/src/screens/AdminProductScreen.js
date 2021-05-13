import React from 'react';
import { useState, useEffect } from 'react';
import ProductTable from '../components/ProductTable';
import './AdminProductScreen.css';
import axios from 'axios';
import { useHistory } from 'react-router';

const AdminProductScreen = () => {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  const navigate = (id) => {
    history.push(`/editproduct/${id}`);
  };
  const navigatetoDelete = (id) => {
    history.push(`/deleteproduct/${id}`);
  };
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

  return (
    <div className="page">
      <div className="page__demo">
        <div className="main-container page__container">
          <button className="btn btn-success" style={{ margin: 5 }}>
            <i className="fas fa-plus"></i> Add New Product
          </button>
          <table className="cus_table">
            <thead className="table__thead">
              <tr className="table__head">
                {heading.map((tblhead, i) => (
                  <th className="table__th" key={i}>
                    {tblhead}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="table__tbody">
              {products.map((tdata, i) => (
                //  console.log(tdata);
                // console.log(Object.keys(tdata))
                <tr className="table__tr" key={tdata._id}>
                  <td
                    className="table__td table__mobile-title"
                    style={{ width: '10% !important' }}
                  >
                    <span style={{ width: '10%' }}>
                      {window.screen.width > 960 ? tdata._id : tdata.name}
                    </span>
                  </td>
                  <td className="table__td">
                    <span className="table__mobile-caption">
                      {Object.keys(tdata)[1]}
                    </span>
                    <span className="table__value">{tdata.name}</span>
                  </td>
                  <td className="table__td">
                    <span className="table__mobile-caption">
                      {Object.keys(tdata)[2]}
                    </span>
                    <span className="table__value">
                      {tdata.imageUrl.substring(0, 100)}...
                    </span>
                  </td>
                  <td className="table__td">
                    <span className="table__mobile-caption">
                      {Object.keys(tdata)[3]}
                    </span>
                    <span className="table__value">
                      {tdata.description.substring(0, 100)}..
                    </span>
                  </td>
                  <td className="table__td">
                    <span className="table__mobile-caption">
                      {Object.keys(tdata)[4]}
                    </span>
                    <span className="table__value">{tdata.price}</span>
                  </td>
                  <td className="table__td">
                    <span className="table__mobile-caption">
                      {Object.keys(tdata)[5]}
                    </span>
                    <span className="table__value">{tdata.countInStock}</span>
                  </td>
                  <td className="table__td">
                    <span className="table__mobile-caption">Actions</span>
                    <span className="table__value">
                      <button
                        className="btn btn-danger"
                        onClick={() => navigatetoDelete(tdata._id)}
                        style={{ margin: 5 }}
                      >
                        <i className="fas fa-trash"></i> DELETE
                      </button>
                      {/* <PopUpModal> DELETE</PopUpModal> */}
                    </span>
                    <span className="table__value">
                      <button
                        className="btn btn-success"
                        style={{ margin: 5 }}
                        onClick={() => navigate(tdata._id)}
                      >
                        <i className="fas fa-edit"></i> UPDATE
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductScreen;
