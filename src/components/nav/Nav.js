import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./styleNav.css";

const Nav = () => {
  const [isHovering, setIsHovering] = useState(0);
  const [isTapClick01, setIsTapClick01] = useState(false);
  const [isTapClick02, setIsTapClick02] = useState(false);
  const [isTapClick03, setIsTapClick03] = useState(false);
  const [isTapClick04, setIsTapClick04] = useState(false);
  const isMobileTap = useMediaQuery({ query: "(max-width: 991px)" });

  useEffect(() => {
    return () => {};
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div
        className="container-fluid px-5"
        style={{ backgroundColor: "black", color: "black" }}
      >
        <div className="container" style={{ color: "red" }}>
          <div style={{ right: "2px" }}>asdas</div>
        </div>
      </div>

      <div
        className="container px-5"
        onMouseOver={() => setIsHovering(1)}
        onMouseOut={() => setIsHovering(0)}
      >
        <Link to="/">
          <a className="navbar-brand fw-bold" href="#page-top">
            <img style={{ width: "100%" }} src="img/a_logo.png"></img>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          MobileTap
          <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li className="nav-item title-width">
              <a className="nav-link" href="#features">
                <div
                  onClick={() => {
                    if(isMobileTap){
                      setIsTapClick01(true);
                      setIsTapClick02(false);
                      setIsTapClick03(false);
                      setIsTapClick04(false);
                    }
                  }}
                >
                  ????????????
                </div>
              </a>
              {isTapClick01 && (
                <div>
                  <div className="item-font">CEO ?????????</div>
                  <div className="item-font">????????????</div>
                  <div className="item-font">?????????</div>
                  <div className="item-font">????????????</div>
                  <div className="item-font">????????????</div>
                </div>
              )}
            </li>

            <li className="nav-item title-width">
              <a className="nav-link" href="#download">
                <div
                  onClick={() => {
                    if(isMobileTap){
                      setIsTapClick01(false);
                      setIsTapClick02(true);
                      setIsTapClick03(false);
                      setIsTapClick04(false);
                    }
                  }}
                >
                  ????????????
                </div>
              </a>
              {isTapClick02 && (
                <div>
                  <div className="item-font">????????????</div>
                </div>
              )}
            </li>

            <li className="nav-item title-width">
              <a className="nav-link" href="#download">
                <div
                  onClick={() => {
                    if(isMobileTap){
                      setIsTapClick01(false);
                      setIsTapClick02(false);
                      setIsTapClick03(true);
                      setIsTapClick04(false);
                    }
                  }}
                >
                  ????????????
                </div>
              </a>
              {isTapClick03 && (
                <div>
                  <div className="item-font">??????1</div>
                  <div className="item-font">??????2</div>
                </div>
              )}
            </li>

            <li className="nav-item title-width">
              <a className="nav-link" href="#download">
                <div
                  onClick={() => {
                    if(isMobileTap){
                      setIsTapClick01(false);
                      setIsTapClick02(false);
                      setIsTapClick03(false);
                      setIsTapClick04(true);
                    }
                  }}
                >
                  ????????????
                </div>
              </a>
              {isTapClick04 && (
                <div>
                  <div className="item-font">????????????</div>
                  <div className="item-font">????????????</div>
                  <div className="item-font">?????????</div>
                  <div className="item-font">?????????????????????</div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>

      {isHovering && !isMobileTap ? (
        <div
          className="container px-5"
          onMouseOver={() => setIsHovering(1)}
          onMouseOut={() => setIsHovering(0)}
        >
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item item-width">
                <Link to="/greeting">
                  <div className="nav-link item-font">CEO ?????????</div>
                </Link>
                <Link to="#">
                  <div className="nav-link item-font">????????????</div>
                </Link>
                <Link to="#">
                  <div className="nav-link item-font">?????????</div>
                </Link>
                <Link to="#">
                  <div className="nav-link item-font">????????????</div>
                </Link>
                <Link to="#">
                  <div className="nav-link item-font">????????????</div>
                </Link>
              </li>

              <li className="nav-item item-width">
                <Link to="#">
                  <div className="nav-link item-font">????????????</div>
                </Link>
              </li>

              <li className="nav-item item-width">
                <Link to="/product">
                  <div className="nav-link item-font">??????1</div>
                </Link>
                <Link to="#">
                  <div className="nav-link item-font">??????2</div>
                </Link>
              </li>

              <li className="nav-item item-width">
                <Link to="#">
                  <div className="nav-link item-font">????????????</div>
                </Link>
                <Link to="#">
                  <div className="nav-link item-font">????????????</div>
                </Link>
                <Link to="#">
                  <div className="nav-link item-font">?????????</div>
                </Link>
                <Link to="#">
                  <div className="nav-link item-font">?????????????????????</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
    
  );
};

export default Nav;
