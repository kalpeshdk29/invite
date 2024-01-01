import React from "react";

const PhotoGallery = () => {
  return (
    <div>
      <div className="content-section" id="photo_gallery">
        <div className="container">
          <div className="section-title"> Gallery </div>
          <div className="content-list">
            <div className="section-content">
              Welcome to our gallery. Here's a peek into all the fun,
              celebrations and special moments from the journey. We hope you
              enjoy it!
            </div>
            <div
              className="grid"
              style={{ position: "relative", height: "414px" }}
            >
              <div
                className="item img-block"
                style={{ position: "absolute", top: "0px", left: "0px" }}
              >
                {" "}
                <img
                  className="gallery-image gallery-img"
                  alt="Gallery Image 0"
                  src="https://cdn.weddingwishlist.com/images/website/gallery/gallery_1.png"
                />{" "}
              </div>
              <div
                className="item img-block"
                style={{ position: "absolute", top: "0px", left: "190px" }}
              >
                {" "}
                <img
                  className="gallery-image gallery-img"
                  alt="Gallery Image 1"
                  src="https://cdn.weddingwishlist.com/images/website/gallery/gallery_2.png"
                />{" "}
              </div>
              <div
                className="item img-block"
                style={{ position: "absolute", top: "130px", left: "0px" }}
              >
                {" "}
                <img
                  className="gallery-image gallery-img"
                  alt="Gallery Image 2"
                  src="https://cdn.weddingwishlist.com/images/website/gallery/gallery_3.png"
                />{" "}
              </div>
              <div
                className="item img-block"
                style={{ position: "absolute", top: "260px", left: "0px" }}
              >
                {" "}
                <img
                  className="gallery-image gallery-img"
                  alt="Gallery Image 3"
                  src="https://cdn.weddingwishlist.com/images/website/gallery/gallery_4.png"
                />{" "}
              </div>
              <div
                className="item img-block"
                style={{ position: "absolute", top: "284px", left: "190px" }}
              >
                {" "}
                <img
                  className="gallery-image gallery-img"
                  alt="Gallery Image 4"
                  src="https://cdn.weddingwishlist.com/images/website/gallery/gallery_5.png"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="galleryModal"
        className="modal fade"
        role="dialog"
        tabindex="-1"
        aria-modal="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ borderBottom: "none", padding: 0 }}
            >
              {" "}
              <button
                type="button"
                className="btn btn-default close-but"
                data-bs-dismiss="modal"
              >
                {" "}
                <i className="fa fa-times-circle"></i>
              </button>{" "}
            </div>
            <div className="modal-body" style={{ padding: "0px !important" }}>
              {" "}
              <img className="img-modal" src="" />{" "}
            </div>
          </div>
        </div>
        <div>
          {" "}
          <span className="prev-pos" id="prev-but" aria-hidden="true">
            {" "}
            <i
              onClick="loadElementToShow(-1)"
              className="fa fa-chevron-circle-left"
            ></i>{" "}
          </span>{" "}
          <span className="next-pos" id="next-but" aria-hidden="true">
            {" "}
            <i
              onClick="loadElementToShow(1)"
              className="fa fa-chevron-circle-right"
            ></i>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
