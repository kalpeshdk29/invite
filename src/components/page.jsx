import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Title from "./Title";
import Functions from "./Functions";
import CountDown from "./CountDown";
import Travel from "./Travel";
import PhotoGallery from "./PhotoGallery";
const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImageData, setLoadedImageData] = useState("");
  const bannerImages = loadedImageData.BannerImages;
  console.log("banner");
  useEffect(() => {
    fetch("https://wedding-invite-vishu-adi.s3.amazonaws.com/links.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLoadedImageData(data);
      })
      .catch((error) => console.error("Error fetching image data:", error));
    // Check if the device is a mobile device
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the threshold as needed
    };
    // Call the function initially and on window resize
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div>
      <div className="body-background">
        <Navbar />
        <Title />
        <CountDown />
        {bannerImages && (
          <section className="banner text-center" id="banner">
            {" "}
            <img
              className="banner-image-new"
              src={
                isMobile
                  ? loadedImageData.BannerImages.small
                  : loadedImageData.BannerImages.large
              }
            />{" "}
          </section>
        )}
        <Functions />
        <Travel />
        <PhotoGallery images={loadedImageData.GalleryImages} />

        <footer style={{ paddingBottom: "25px" }} id="footer">
          <div className="primary-footer">
            <div className="container">
              <div className="row">
                <div className="col text-uppercase">
                  {" "}
                  <img
                    src="https://cdn.weddingwishlist.com/images/website/logo/theme-1.png"
                    id="footer-logo"
                    className="footer-logo"
                    alt="footer-logo"
                  />
                  <h4 className="footer-name">VISHAKHA &amp; ADITYA</h4>
                  <span className="footer-date">February 04, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;
