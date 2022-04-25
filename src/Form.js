import React from "react";

const Form = ({
  handleSubmit,
  setSearch,
  setOrientation,
  orientation,
  search,
}) => {
  return (
    <>
      <div className="orientation">
        <button
          onClick={() => setOrientation("portrait")}
          className={orientation === "portrait" ? "selected" : null}
        >
          portrait
        </button>
        <button
          onClick={() => setOrientation("landscape")}
          className={orientation === "landscape" ? "selected" : null}
        >
          landscape
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
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button type="submit" className="go-btn">
          Go
        </button>
      </form>
    </>
  );
};

export default Form;
