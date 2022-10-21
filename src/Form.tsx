import React from "react";

type Orientation = "landscape" | "portrait" | "squarish";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setOrientation: React.Dispatch<React.SetStateAction<Orientation>>;
  orientation: Orientation;
  search: string;
  lastSearch: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form = ({
  handleSubmit,
  setSearch,
  setOrientation,
  orientation,
  search,
  lastSearch,
  setLoading,
}: Props): JSX.Element => {
  const handlePortraitClick = () => {
    // If there are already image tiles displayed, show loading component.
    if (lastSearch) {
      setLoading(true);
    }
    setSearch(lastSearch);
    setOrientation("portrait");
  };
  const handleLandscapeClick = () => {
    if (lastSearch) {
      setLoading(true);
    }
    setSearch(lastSearch);
    setOrientation("landscape");
  };

  return (
    <section className="search-form">
      <div className="orientation">
        <button
          onClick={handlePortraitClick}
          className={orientation === "portrait" ? "toggle selected" : "toggle"}
        >
          <div className="portrait">&#9645; </div>&nbsp;portrait
        </button>
        <button
          onClick={handleLandscapeClick}
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
