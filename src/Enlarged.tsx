import React from "react";

interface Photo {
  description: string;
  id: string;
  regular: string;
  thumb: string;
  color: string;
  likes: number;
}

type Props = {
  selectedPhoto: Photo;
  setBigPic: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Enlarged = ({ selectedPhoto, setBigPic }: Props): JSX.Element => {
  const backcolor = selectedPhoto.color + "dd";
  return (
    <article
      className="enlarged-image"
      style={{ backgroundColor: `${backcolor}` }}
    >
      <img src={selectedPhoto.regular} alt={selectedPhoto.description} />
      <button className="close-btn" onClick={() => setBigPic(false)}>
        <div className="close-btn-x">&#215;</div>
      </button>
    </article>
  );
};
