import React from "react";
import head from "../images/women.jpg";
const Header = () => {
  return (
    <>
      <header className="p-5 bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-5 ">
              <h1>
                <span className="text-success">The Possibilties</span> are
                beautiful.
              </h1>
              <h5>Don't Miss The Ulta Beauty Services. </h5>
              <button className="btn btn-success text-info p-2">
                See More
              </button>
            </div>
            <div className="col-md-8 col-sm-12 mt-3">
              <img src={head} alt="Head image" className="img-fluid" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
