import React from "react";

const Products = ({ product }) => {
  const {
    id,
    name,
    brand,
    category,
    currency,
    description,
    price,
    price_sign,
    product_api_url,
    image_link,
    product_type,
  } = product;
  return (
    <>
      <div className="container" key={id}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={image_link}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description.slice(0, 110)}</p>
                <p className="card-text d-flex justify-content-evenly">
                  <small className="text-muted">
                    {price_sign === null ? "$" : price_sign}
                    {price}
                  </small>
                  <small className="text-muted">{category}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
