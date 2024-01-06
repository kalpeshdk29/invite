import React from 'react'
import myImage from "../Images/indian-engagement-wallpapers.png";

const functions = () => {
  return (
    <section className="functions content-section" id="functions">
    <div className="container">
        <div className="section-title"> Functions </div>
        <div className="content-list">
            <div className="row events-container">
                <div className="col-sm-hidden col-md-7">
                    <div className="image-container-1">
                        <div id="event-1-img" className="event-img"><img
                            src="https://cdn.weddingwishlist.com/images/website/functions/wedding-function-mehendi.jpg"
                            alt="wedding-website-functions-thumbnail-1" /></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 event-description-wrapper">
                    <div className="event-description-container">
                        <div className="event-description">
                            <h3 id="event-1-name" className="event-name">Mehendi</h3>
                            <div className="image-container-2">
                                <div id="event-1-img" className="event-img"><img
                                    src="https://cdn.weddingwishlist.com/images/website/functions/wedding-function-mehendi.jpg"
                                    alt="wedding-website-functions-thumbnail-1" /> </div>
                            </div>
                            <div id="event-1-day" className="event-date">February 02, 2024<br />7:00 PM </div><br />
                            <address> <span id="event-1-map" className="event-map"> Parth Avenue,<br />Saraswati Nagar,
                                Nashik <div id="event-1-maplink" className="event-maplink"></div>
                            </span> </address><br />
                            <p id="event-1-text6" className="event-details" style={{ padding: "5px 0" }}>Dress Code
                                : Bright &amp; bling</p>
                            <div style={{ margin: '10px 0', paddingBottom: "30px" }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row events-container">
                    <div className="col-sm-hidden col-md-7">
                        <div className="image-container-1">
                            <div id="event-2-img" className="event-img"><img
                                    src={myImage}
                                    alt="wedding-website-functions-thumbnail-2"/></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5 event-description-wrapper">
                        <div className="event-description-container">
                            <div className="event-description">
                                <h3 id="event-2-name" className="event-name">Engagement</h3>
                                <div className="image-container-2">
                                    <div id="event-2-img" className="event-img"><img
                                            src="https://i0.wp.com/sociallover.net/wp-content/uploads/2017/05/indian-engagement-wallpapers.png"
                                            alt="wedding-website-functions-thumbnail-2"/> </div>
                                </div>
                                <div id="event-2-day" className="event-date">February 04, 2024<br/>5:00 PM - 6:30 PM </div><br/>
                                <address> <span id="event-4-map" className="event-map"> Panchkrushna Lawns,<br />Konark Nagar, Nashik,  <div id="event-4-maplink" className="event-maplink"> <a target="_blank"
                                    type="button" id="map_2" title="View Map"
                                    style={{ textDecoration: "none !important", boxShadow: "none", }}
                                    href="https://maps.app.goo.gl/VLzvyM69HTDmuknt6"
                                    className="btn btn-link view-map action-link">&nbsp;View Map</a> </div>
                            </span> </address><br />
                                <p id="event-2-text6" className="event-details" style={{ padding: "5px 0 !important", }}>Dress
                                    Code: Bollywood-inspired</p>
                                <div style={{ margin: "10px 0", paddingBottom: "30px", }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="row events-container">
                <div className="col-sm-hidden col-md-7">
                    <div className="image-container-1">
                        <div id="event-3-img" className="event-img"><img
                            src="https://cdn.weddingwishlist.com/images/website/functions/wedding-function-haldi.jpg"
                            alt="wedding-website-functions-thumbnail-3" /></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 event-description-wrapper">
                    <div className="event-description-container">
                        <div className="event-description">
                            <h3 id="event-3-name" className="event-name">Haldi</h3>
                            <div className="image-container-2">
                                <div id="event-3-img" className="event-img"><img
                                    src="https://cdn.weddingwishlist.com/images/website/functions/wedding-function-haldi.jpg"
                                    alt="wedding-website-functions-thumbnail-3" /> </div>
                            </div>
                            <div id="event-3-day" className="event-date">February 03, 2024<br />7:00 PM </div><br />
                            <address> <span id="event-4-map" className="event-map"> Panchkrushna Lawns,<br />Konark Nagar, Nashik,  <div id="event-4-maplink" className="event-maplink"> <a target="_blank"
                                    type="button" id="map_2" title="View Map"
                                    style={{ textDecoration: "none !important", boxShadow: "none", }}
                                    href="https://maps.app.goo.gl/VLzvyM69HTDmuknt6"
                                    className="btn btn-link view-map action-link">&nbsp;View Map</a> </div>
                            </span> </address><br />
                            <p id="event-3-text6" className="event-details" style={{ padding: "5px 0 !important", }}>Dress
                                Code: Dress like royalty</p>
                            <div style={{ margin: "10px 0", paddingBottom: "30px", }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row events-container">
                <div className="col-sm-hidden col-md-7">
                    <div className="image-container-1">
                        <div id="event-4-img" className="event-img"><img
                            src="https://cdn.weddingwishlist.com/images/website/functions/wedding-function-wedding.jpg"
                            alt="wedding-website-functions-thumbnail-4" /></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 event-description-wrapper">
                    <div className="event-description-container">
                        <div className="event-description">
                            <h3 id="event-4-name" className="event-name">Wedding</h3>
                            <div className="image-container-2">
                                <div id="event-4-img" className="event-img"><img
                                    src="https://cdn.weddingwishlist.com/images/website/functions/wedding-function-wedding.jpg"
                                    alt="wedding-website-functions-thumbnail-4" /> </div>
                            </div>
                            <div id="event-4-day" className="event-date">February 04, 2024<br />12:30 PM </div><br />
                            <address> <span id="event-4-map" className="event-map"> Panchkrushna Lawns,<br />Konark Nagar, Nashik,  <div id="event-4-maplink" className="event-maplink"> <a target="_blank"
                                    type="button" id="map_2" title="View Map"
                                    style={{ textDecoration: "none !important", boxShadow: "none", }}
                                    href="https://maps.app.goo.gl/VLzvyM69HTDmuknt6"
                                    className="btn btn-link view-map action-link">&nbsp;View Map</a> </div>
                            </span> </address><br />
                            <p id="event-4-text6" className="event-details" style={{ padding: "5px 0 !important", }}>Dress
                                Code: Traditional</p>
                            <div style={{ margin: "10px 0", paddingBottom: "30px", }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
  )
}

export default functions  