import React from "react";

const Form = ({ handleSubmit, setOrientation, orientation, search }) => {
  return (
    <>
      <div className="orientation">
        <button
          onClick={() => setOrientation("portrait")}
          className={orientation === "portrait" && "selected"}
        >
          portrait
        </button>
        <button
          onClick={() => setOrientation("landscape")}
          className={orientation === "landscape" && "selected"}
        >
          landscape
        </button>
      </div>

      <form onSubmit={(e) => handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          name="search"
          autoComplete="off"
          value={search}
          onChange={(e) => {
            console.log(e.target.value);
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
