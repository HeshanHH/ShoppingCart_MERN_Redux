import React from 'react';
import './ProductTable.css';

const ProductTable = ({ tableHeadings, tabledata, isEdit, isDelete }) => {
  return (
    <div className="page">
      <div className="page__demo">
        <div className="main-container page__container">
          <table className="cus_table">
            <thead className="table__thead">
              <tr className="table__head">
                {tableHeadings.map((tblhead, i) => (
                  <th className="table__th" key={i}>
                    {tblhead}
                  </th>
                ))}
                {/* <th className="table__th">Features</th>
                <th className="table__th">Silver Package</th>
                <th className="table__th">Gold Package</th>
                <th className="table__th">Platinum Package</th>
                <th className="table__th">Actions</th> */}
              </tr>
            </thead>
            <tbody className="table__tbody">
              {tabledata.map((tdata, i) => (
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
                      <button className="btn btn-danger" style={{ margin: 5 }}>
                        <i className="fas fa-trash"></i> DELETE
                      </button>
                    </span>
                    <span className="table__value">
                      <button className="btn btn-success" style={{ margin: 5 }}>
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

export default ProductTable;
