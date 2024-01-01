import React, { useEffect, useState } from 'react';


import Navbar from "./Navbar";
import Title from "./Title";
import Functions from "./Functions";
import CountDown from "./CountDown";
import Travel from "./Travel";


import PhotoGallery from "./PhotoGallery";
import RSVP from "./RSVP";
const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is a mobile device
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the threshold as needed
    };
     // Call the function initially and on window resize
     checkIsMobile();
     window.addEventListener('resize', checkIsMobile);
 
     // Cleanup the event listener on component unmount
     return () => {
       window.removeEventListener('resize', checkIsMobile);
     };
   }, []);

  return (
    <div>
      <div className="body-background">

        <div className="play-music" title="Click to mute">
          {" "}
          <img
            id="thumb-image-off"
            className="thumb-image fa-play-circle d-none"
            src="https://cdn.weddingwishlist.com/images/website/audio/sound-off.png"
          />{" "}
          <img
            id="thumb-image-on"
            className="thumb-image fa-play-circle"
            src="https://cdn.weddingwishlist.com/images/website/audio/sound-on.png"
          />
        </div>
        <div className="audio-div d-none">
          {" "}
          <audio loop="" id="mymusic" controls="controls">
            <source
              src="https://cdn.weddingwishlist.com/audio/website/theme1.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
         <Navbar />
       
        <Title />
        <CountDown />
        {/* <section className="banner text-center" id="banner">
        <video className="banner-video-new" autoPlay loop muted>
          {isMobile ? (
            <source src="https://wedding-invite-vishu-adi.s3.amazonaws.com/Bannermobile.mp4" type="video/mp4" />
          ) : (
            <source src="https://wedding-invite-vishu-adi.s3.amazonaws.com/BannerFull.mp4" type="video/mp4" />
          )}
          Your browser does not support the video tag.
        </video>
      </section> */}

        <section className="banner text-center" id="banner">
          {" "}
          <img
            className="banner-image-new"
            src={isMobile ? 'https://wedding-invite-vishu-adi.s3.amazonaws.com/Bannermobile.jpg' : 'https://wedding-invite-vishu-adi.s3.amazonaws.com/BannerNew.jpg'}
            
          />{" "}
        </section>
        <Functions />
        <Travel />
        <PhotoGallery />
        <RSVP/>.
      </div>
    </div>
  );
};

export default Page;
