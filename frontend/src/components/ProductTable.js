import React from 'react';
import './ProductTable.css';

const ProductTable = () => {
  return (
    <div className="page">
      <div className="page__demo">
        <div className="main-container page__container">
          <table className="cus_table">
            <thead className="table__thead">
              <tr className="table__head">
                <th className="table__th">Features</th>
                <th className="table__th">Silver Package</th>
                <th className="table__th">Gold Package</th>
                <th className="table__th">Platinum Package</th>
                <th className="table__th">Actions</th>
              </tr>
            </thead>
            <tbody className="table__tbody">
              <tr className="table__tr">
                <td className="table__td table__mobile-title">
                  <span>Wedding day coverage</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Silver Package</span>
                  <span className="table__value">6 hours</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Gold Package</span>
                  <span className="table__value">8 hours</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">
                    Platinum Package
                  </span>
                  <span className="table__value">10 hours</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Actions</span>
                  <span className="table__value">
                    <button className="btn btn-danger">DELETE</button>
                  </span>
                  <span className="table__value">
                    <button className="btn btn-success" style={{ margin: 5 }}>
                      UPDATE
                    </button>
                  </span>
                </td>
              </tr>
              <tr className="table__tr">
                <td className="table__td table__mobile-title">
                  <span>Post production</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Silver Package</span>
                  <span className="table__value">2 weeks</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Gold Package</span>
                  <span className="table__value">3 weeks</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">
                    Platinum Package
                  </span>
                  <span className="table__value">4 weeks</span>
                </td>
              </tr>
              <tr className="table__tr">
                <td className="table__td table__mobile-title">
                  <span>USB drive & copyrights of photographs</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Silver Package</span>
                  <span className="table__value">600 photos</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Gold Package</span>
                  <span className="table__value">700 photos</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">
                    Platinum Package
                  </span>
                  <span className="table__value">800 photos</span>
                </td>
              </tr>
              <tr className="table__tr">
                <td className="table__td table__mobile-title">
                  <span>
                    Viewing session (in 4k) with your wedding music and
                    complimentary bubbly
                  </span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Silver Package</span>
                  <span className="table__value">Yes</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Gold Package</span>
                  <span className="table__value">Yes</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">
                    Platinum Package
                  </span>
                  <span className="table__value">Yes</span>
                </td>
              </tr>
              <tr className="table__tr">
                <td className="table__td table__mobile-title">
                  <span>
                    12×12 Acrylic storybook wedding album (with matching acrylic
                    case)
                  </span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Silver Package</span>
                  <span className="table__value">No</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Gold Package</span>
                  <span className="table__value">Yes</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">
                    Platinum Package
                  </span>
                  <span className="table__value">Yes</span>
                </td>
              </tr>
              <tr className="table__tr">
                <td className="table__td table__mobile-title">
                  <span>8×8 Acrylic parent albums</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Silver Package</span>
                  <span className="table__value">No</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Gold Package</span>
                  <span className="table__value">No</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">
                    Platinum Package
                  </span>
                  <span className="table__value">Yes</span>
                </td>
              </tr>
              <tr className="table__tr">
                <td className="table__td table__mobile-title">
                  <span>Price</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Silver Package</span>
                  <span className="table__value">799$</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">Gold Package</span>
                  <span className="table__value">1250$</span>
                </td>
                <td className="table__td">
                  <span className="table__mobile-caption">
                    Platinum Package
                  </span>
                  <span className="table__value">1850$</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
