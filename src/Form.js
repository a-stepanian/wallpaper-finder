import React from "react";

const Form = ({
  handleSubmit,
  setSearch,
  setOrientation,
  orientation,
  search,
}) => {
  return (
    <section className="search-form">
      <div className="orientation">
        <button
          onClick={() => setOrientation("portrait")}
          className={orientation === "portrait" ? "toggle selected" : "toggle"}
        >
          <div className="portrait">&#9645; </div>&nbsp;portrait
        </button>
        <button
          onClick={() => setOrientation("landscape")}
          className={orientation === "landscape" ? "toggle selected" : "toggle"}
        >
          <div className="landscape">&#9645;</div>&nbsp;landscape
        </button>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          name="search"
          autoComplete="off"
          value={search}
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button type="submit" className="go-btn">
          <div className="mag">&#x1F50E;&#xFE0E;</div>
        </button>
      </form>
    </section>
  );
};

export default Form;
