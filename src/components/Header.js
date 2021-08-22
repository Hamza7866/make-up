import React from "react";
import head from "../images/women.jpg";
const Header = () => {
  return (
    <>
      <header className="p-5 bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-5 p-5">
              <h1>The Possibilties are beautiful.</h1>
              <p>Don't Miss The Ulta Beauty Services. </p>
              <button className="btn btn-success text-info p-2">
                See More
              </button>
            </div>
            <div className="col-md-8 col-sm-12 mt-3">
              <img src={head} alt="Head image" class="img-fluid" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
