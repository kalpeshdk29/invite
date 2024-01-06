import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons"

const PhotoGallery = () => {

  const galleryImages =[
    {img :"https://cdn.weddingwishlist.com/images/website/gallery/gallery_1.png"},
    {img :"https://cdn.weddingwishlist.com/images/website/gallery/gallery_2.png"},
    {img :"https://cdn.weddingwishlist.com/images/website/gallery/gallery_3.png"},
    {img :"https://cdn.weddingwishlist.com/images/website/gallery/gallery_4.png"},
    {img :"https://cdn.weddingwishlist.com/images/website/gallery/gallery_5.png"}
  ]

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModel, setOpenModel] = useState(false)

  const handleOpenModel=(index)=>{
    setSlideNumber(index)
    setOpenModel(true)
  }

  const handleCloseModel =()=>{

    setOpenModel(false)
  }

  const handlePrev =()=>{
    slideNumber === 0 ? setSlideNumber( galleryImages.length -1) : setSlideNumber(slideNumber -1)
    
  }

  const handleNext =()=>{

    slideNumber === (galleryImages.length -1) ? setSlideNumber( 0) : setSlideNumber(slideNumber +1)
  }
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

          <div>   
            {
              openModel && 
              <div className="slideWrap">
                <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModel} />
                <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={handlePrev}/>
                <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={handleNext} />
                <div className="fullScreenImage">
                  <img src={galleryImages[slideNumber].img} alt="" />
                </div>
              </div>
            }

              <div className="galleryWrap">
              {
                  galleryImages && galleryImages.map((slide ,index)=>{
                    return(

                      <div 
                        className="single" 
                        key={index}
                        onClick={()=> handleOpenModel(index)}
                      >
                        <img src={slide.img} alt="" />
                      </div>
                    )

                  })

              }

              </div>
            
          </div>





          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
