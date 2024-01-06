import React, { useState } from 'react'


const RSVP = () => {

  const [senderName , SetsenderName] = useState("");
  const [email , Setemail] = useState("");
  const [phoneNumber , SetPhoneNumber] = useState("");
  const [message, SetMessage] = useState("");
  const [status, SetStatus] = useState("");

  const handleOnSend=()=>
  {
    console.log("Name:", senderName)
    console.log("email:", email)
    console.log("phoneNumber:", phoneNumber)
    console.log("message:", message)
    console.log("status:", status)

  }

  return (
    <div>
                <div className="content-section" id="rsvp">
          <div className="container">
            <div className="section-title">RSVP</div>
            <div className="content-list">
              <form id="host-rsvp-form">
                <div className="section-content rsvp-wrapper text-left">
                  <div className="row mt-2">
                    <div className="col-12">
                      <input
                        className="rsvp-input"
                        type="text"
                        name="rsvp-name"
                        id="rsvp-name"
                        placeholder="Your Name"
                      />
                      <span className="error-red-text rsvp-name_error d-none">
                        This field is mandatory.
                      </span>
                    </div>
                  </div>
                  <div className="row mt-3 pt-1">
                    <div className="col-12 col-sm-6">
                      <input
                        className="rsvp-input"
                        type="text"
                        name="rsvp-email"
                        id="rsvp-email"
                        placeholder="Email Id"
                        
                      />
                      <span className="error-red-text rsvp-email_error d-none">
                        This field is mandatory.
                      </span>
                    </div>
                    <div className="col-12 col-sm-6 mt-3 mt-sm-0 pt-1 pt-sm-0">
                      <input
                        className="rsvp-input"
                        type="text"
                        name="rsvp-phone"
                        id="rsvp-phone"
                        placeholder="Phone Number"
                      />
                      <span className="error-red-text rsvp-phone_error d-none">
                        This field is mandatory.
                      </span>
                    </div>
                  </div>
                  <div className="row mt-3 pt-1">
                    <div className="col-12">
                      <div className="rsvp-text-area-block">
                        <textarea
                          name="rsvp-message"
                          id="rsvp-message"
                          cols="3"
                          className="rsvp-text-area"
                          placeholder="Message (optional)"
                          value={message}
                          style={{height:"150px"}}
                        ></textarea>

                        <span className="error-red-text rsvp-message_error d-none"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <div className="rsvp-question p-0">
                        Please let us know whether you can attend our occasion
                      </div>
                      <div className="rsvp-options">
                        <span className="error-red-text stats_attend-error d-none">
                          This field is mandatory.
                        </span>
                        <div className="rsvp-each-option m-0">
                          <label for="stats_attending" className="rsvp-radio">
                            <input
                              type="radio"
                              name="stats_attend"
                              id="stats_attending"
                              className="rsvp-button"
                              value="attending"
                            />
                            <span className="radio-state"></span>
                            Yes. I'll be there in person
                          </label>
                          <label for="stats_virtual" className="rsvp-radio">
                            <input
                              type="radio"
                              name="stats_attend"
                              id="stats_virtual"
                              className="rsvp-button"
                              value="virtual"
                            />
                            <span className="radio-state"></span>
                            I'll attend virtually
                          </label>
                          <label
                            for="stats_not_attending"
                            className="rsvp-radio"
                          >
                            <input
                              type="radio"
                              name="stats_attend"
                              id="stats_not_attending"
                              className="rsvp-button"
                              value="not_attending"
                            />
                            <span className="radio-state"></span>
                            No. I can't attend
                          </label>
                          <label for="stats_not_sure" className="rsvp-radio">
                            <input
                              type="radio"
                              name="stats_attend"
                              id="stats_not_sure"
                              className="rsvp-button"
                              value="not_sure"
                            />
                            <span className="radio-state"></span>
                            I'm not sure
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rsvp-form d-none" id="guest_section">
                    <div className="row mt-2">
                      <div className="col-12">
                        <input
                          type="tel"
                          name="guest_count"
                          id="guest_count"
                          className="rsvp-input"
                          placeholder="No. of guests attending"
                        />
                        <span className="error-red-text guest_count-error d-none">
                          This field is mandatory.
                        </span>
                      </div>
                    </div>
                    <div className="row mt-3 pt-1">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          placeholder="Arrival Date &amp; Time"
                          id="arrival_date"
                          className="rsvp-input"
                        />
                      </div>
                      <div className="col-12 col-sm-6 pt-1 pt-sm-0 mt-3 mt-sm-0">
                        <input
                          type="text"
                          placeholder="Arrival Details (Optional)"
                          id="arrival_details"
                          className="rsvp-input"
                        />
                      </div>
                    </div>
                    <div className="row mt-3 pt-1">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          placeholder="Departure Date &amp; Time"
                          id="departure_date"
                          name="departure_date"
                          className="rsvp-input"
                        />
                      </div>
                      <div className="col-12 col-sm-6 pt-1 pt-sm-0 mt-3 mt-sm-0">
                        <input
                          type="text"
                          placeholder="Departure Details (Optional)"
                          id="departure_details"
                          name="departure_details"
                          className="rsvp-input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row my-2">
                    <div className="col-sm-12 text-center">
                      <button
                        type="button"
                        id="rsvp_submit"
                        className="rsvp-submit"
                        onClick={handleOnSend}
                      >
                        Send RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          id="rsvpConfirm"
          className="modal fade"
          role="dialog"
          tabindex="-1"
          aria-modal="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" style={{ borderRadius: "0" }}>
              <div className="modal-header">
                <h5 className="modal-title">Override RSVP</h5>
                <button
                  type="button"
                  className="btn btn-default"
                  data-bs-dismiss="modal"
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          {/*-------------------------------------------------------------------------------------------------- */}
          <footer id="footer">
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
                    <h4 className="footer-name">VISHAKHA &amp; ADITYA</h4>{" "}
                    <span className="footer-date">December 31, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
    </div>
  )
}

export default RSVP