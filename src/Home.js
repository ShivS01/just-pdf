import React from "react";
import home from "./img/homepage.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="malign">
        <div className="content-body malign">
          <div className="row">
            <div className="col-md-7 malign">
              <div className="content-left-inside">
                <h1 className="text-white page-header">
                  Just Pdf for all your academic needs
                </h1>
                <p className="lead text-white">
                  Find all your academic books in one place without any hassle
                </p>
                <Link to="/books">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    // style="margin-top:10px;"
                  >
                    <i className="fas fa-book"></i> Browse
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-5">
              <center>
                <img src={home} height="350" alt="books" />
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
