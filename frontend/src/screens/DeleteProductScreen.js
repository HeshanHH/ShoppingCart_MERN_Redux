import React, { useEffect, useState } from 'react';
import './DeleteProductScreen.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const DeleteProductScreen = ({ match }) => {
  const url = '';
  const history = useHistory();
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

  async function submit(e) {
    e.preventDefault();
    await axios
      .delete(`/api/products/${product._id}`, {
        ...product,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log('deleted');
          console.log(res.data);
          setProduct({
            _id: '',
            name: '',
            imageUrl: '',
            description: '',
            price: 0,
            countInStock: 0,
          });
          toast.success('Product Successfully deleted! ☑', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          //   setInterval(() => {
          //     history.push(`/adminproduct`);
          //   }, 1000);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Something went wrong while deleting the product 📌', {
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
              Product ID :
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              placeholder="ID"
              required
              value={product._id}
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Product Name"
              required
              disabled
              value={product.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">
              Image Url :
            </label>
            <textarea
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Image Url"
              rows="3"
              required
              disabled
              value={product.imageUrl}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description :
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
              rows="3"
              required
              disabled
              value={product.description}
            />
          </div>
          <div className="row mb-3 g-3">
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price :
              </label>
              <input
                type="number"
                min="0"
                max="10000"
                className="form-control"
                id="price"
                required
                disabled
                value={product.price}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="countInStock" className="form-label">
                In Stock :
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="form-control"
                id="countInStock"
                required
                disabled
                value={product.countInStock}
              />
            </div>
          </div>
          <div className="d-grid gap-2 d-md-block">
            <button type="submit" className="btn btn-danger btn-lg me-2">
              Delete Product
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

export default DeleteProductScreen;
