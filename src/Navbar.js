import React, { useState } from "react";

const Navbar = ({ handleSubmit, searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
