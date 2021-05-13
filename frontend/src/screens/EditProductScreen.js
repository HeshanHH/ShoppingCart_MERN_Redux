import './EditProductScreen.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const EditProductScreen = ({ match }) => {
  const url = '';
  const [product, setProduct] = useState({
    _id: '',
    name: '',
    imageUrl: '',
    description: '',
    price: 0,
    countInStock: 0,
  });

  console.log('match', match);

  useEffect(() => {
    async function fetchDate() {
      const data = await axios.get(`/api/products/${match.params.id}`);
      return await data;
    }
    fetchDate()
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setProduct(res.data);
          console.log(product);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Something went wrong while getting the product 📌', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, []);

  async function handle(e) {
    const newData = { ...product };
    newData[e.target.id] = e.target.value;
    setProduct(newData);
    console.log(newData);
  }

  async function submit(e) {
    e.preventDefault();
    await axios
      .put(`/api/products/${product._id}`, {
        ...product,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log('Added');
          console.log(res.data);
          setProduct({
            name: '',
            imageUrl: '',
            description: '',
            price: 0,
            countInStock: 0,
          });
          toast.success('Product Successfully updated! ☑', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Something went wrong while updating the product 📌', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div
        className="container p-3 mt-5 text-white"
        style={{ backgroundColor: '#02475e' }}
      >
        <form onSubmit={(e) => submit(e)}>
          <h1
            className="form-label"
            style={{ color: 'white', textAlign: 'center' }}
          >
            <b>Update Product</b>
          </h1>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Product ID : <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              placeholder="ID"
              required
              onChange={(e) => handle(e)}
              value={product._id}
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name: <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Product Name"
              required
              onChange={(e) => handle(e)}
              value={product.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">
              Image Url : <span style={{ color: 'red' }}>*</span>
            </label>
            <textarea
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Image Url"
              rows="3"
              required
              onChange={(e) => handle(e)}
              value={product.imageUrl}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description : <span style={{ color: 'red' }}>*</span>
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
              rows="3"
              required
              onChange={(e) => handle(e)}
              value={product.description}
            />
          </div>
          <div className="row mb-3 g-3">
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price : <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="number"
                min="0"
                max="10000"
                className="form-control"
                id="price"
                required
                onChange={(e) => handle(e)}
                value={product.price}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="countInStock" className="form-label">
                In Stock : <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="form-control"
                id="countInStock"
                required
                onChange={(e) => handle(e)}
                value={product.countInStock}
              />
            </div>
          </div>
          <div className="d-grid gap-2 d-md-block">
            <button type="submit" className="btn btn-primary btn-lg me-2">
              Update Product
            </button>
            <Link to="/adminproduct" className="btn btn-secondary btn-lg">
              Back To Product List
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProductScreen;
