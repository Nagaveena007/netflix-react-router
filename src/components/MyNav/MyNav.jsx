import "./MyNav.css";
import { Nav, Button, InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MyNav = ({ showSearchResult }) => {
  const [searchString, setSearchString] = useState("");
  const location = useLocation();
  const searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      showSearchResult(searchString);
    } else {
      setSearchString(e.currentTarget.value);
    }
  };
  return (
    <>
      <Nav className="navbar navbar-expand-lg nav-center">
        <a className="navbar-brand" href="./home/home">
          <img
            src="netflix_logo.png"
            className="nav-logo-img"
            alt="netflix logo"
          />
        </a>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <Link to="/">
              <div
                className={
                  location.pathname === "/tvshows"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </div>
            </Link>
            <Link to="/tvshows">
              <div
                className={
                  location.pathname === "/tvshows"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                TV Shows
              </div>
            </Link>
            <Link to="/movies">
              <div
                className={
                  location.pathname === "/movies"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Movies
              </div>
            </Link>
            <Link to="/recentlyadded">
              <div
                className={
                  location.pathname === "/recentlyadded"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Recently Added
              </div>
            </Link>
            <Link to="/mylist">
              <div
                className={
                  location.pathname === "/mylist"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                My List
              </div>
            </Link>
            {/*  <a className="nav-link nav-link-active" href="./home/home">
                Home <span className="sr-only">(current)</span>
              </a> */}

            {/* <li className="nav-item">
              <a className="nav-link" href="./home/home">
                TV Shows
              </a>
            </li> */}

            {/*  <li className="nav-item">
              <a className="nav-link" href="./home/home">
                Movies
              </a>
            </li> */}

            {/* <li className="nav-item">
              <a className="nav-link" href="./home/home">
                Recently Added
              </a>
            </li> */}

            {/*  <li className="nav-item">
              <a className="nav-link" href="./home/home">
                My List
              </a>
            </li>
          </div> */}
          </div>
          {/*  <span className="d-flex align-items-center">
            <InputGroup className="icons mr-3">
              <FormControl
                placeholder="Search and press enter"
                aria-label="search"
                aria-describedby="basic-addon1"
                onKeyDown={searchStringHandler}
                onChange={searchStringHandler}
                value={searchString}
              />
            </InputGroup>
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </span> */}
          <i className="fas fa-search"></i>
          <a className="nav-link" href="./home/home">
            Admin
          </a>

          <i className="fas fa-bell"></i>
          <img src="avatar.png" className="nav-avatar" alt="nav-avatar" />
          <i className="fas fa-caret-down"></i>
        </div>
      </Nav>

      <header
        className="header img-fluid"
        style={{
          backgroundImage: `url("squid-game.jpg")`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="banner" style={{}}>
          <div className="banner-info">
            <h1 className="banner-title">SQUID GAMES</h1>
            <div className="banner-icons">
              <Button className="banner-btn">Play</Button>
              <Button className="banner-btn">My List</Button>
            </div>
            <div className="banner-description">
              Hundreds of cash-strapped players accept a strange invitation to
              compete in children's games. Inside, a tempting prize awaits —
              with deadly high stakes.
            </div>
          </div>
          <div className="banner-fade"></div>
        </div>
      </header>
    </>
  );
};
export default MyNav;
