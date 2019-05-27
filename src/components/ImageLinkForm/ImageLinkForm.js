import React from "react";
import './ImageLinkForm.css';
const ImageLinkForm = () => {
  return (
    <div className="ma3 mt0">
      <p className="f3">
        {"This is brain will detect faces in your pictures. Git it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-green">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
