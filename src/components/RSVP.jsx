import React from 'react'

const RSVP = () => {
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
                        ></textarea>
                        <div className="file_list">
                          <p
                            className="basic-text-font attached-file-info d-none"
                            data-attr="image"
                          >
                            <span
                              style={{
                                maxWidth: "240px !important",
                                width: "85%",
                                display: "inline-block",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                height: "21px",
                              }}
                            ></span>
                            <button
                              type="button"
                              className="close remove-upload-attachment float-end bg-transparent border-0"
                            >
                              x
                            </button>
                          </p>
                          <p
                            className="basic-text-font attached-file-info d-none"
                            data-attr="audio"
                          >
                            <span
                              style={{
                                maxWidth: "240px !important",
                                width: "85%",
                                display: "inline-block",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                height: "21px",
                              }}
                            ></span>
                            <button
                              type="button"
                              className="close remove-upload-attachment float-end bg-transparent border-0"
                            >
                              x
                            </button>
                          </p>
                          <p
                            className="basic-text-font attached-file-info d-none"
                            data-attr="video"
                          >
                            <span
                              style={{
                                maxWidth: "240px !important",
                                width: "85%",
                                display: "inline-block",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                height: "21px",
                              }}
                            ></span>
                            <button
                              type="button"
                              className="close remove-upload-attachment float-end bg-transparent border-0"
                            >
                              x
                            </button>
                          </p>
                        </div>
                        <span className="error-red-text rsvp-message_error d-none"></span>
                        <div className="attachment-icons">
                          <label for="image_upload">
                            <svg
                              className="attachment-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 480 480"
                            >
                              <path d="m440 72h-400c-22.08 0.026-39.974 17.92-40 40v256c0.026 22.08 17.92 39.974 40 40h400c2.245 9e-3 4.486-0.187 6.696-0.584 19.249-3.222 33.341-19.899 33.304-39.416v-256c-0.026-22.081-17.92-39.974-40-40zm-400 320c-12.435-2e-3 -22.81-9.501-23.904-21.888l159.5-104.29 162.21 126.18h-297.81zm424-24c0.013 11.742-8.492 21.761-20.08 23.656-1.294 0.233-2.606 0.348-3.92 0.344h-76.136l-105.99-82.488 94.784-75.792 111.34 66.808v67.472zm0-86.128-107.88-64.728c-2.868-1.725-6.506-1.482-9.12 0.608l-102.14 81.68-63.96-49.744c-2.695-2.094-6.421-2.249-9.28-0.384l-155.62 101.75v-239.06c0-13.255 10.745-24 24-24h400c13.255 0 24 10.745 24 24v169.87z"></path>
                              <path d="m240 120c-26.51 0-48 21.49-48 48 0.026 26.499 21.501 47.974 48 48 26.51 0 48-21.49 48-48s-21.49-48-48-48zm0 80c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z"></path>
                            </svg>
                            <input
                              type="file"
                              id="image_upload"
                              accept="image/*"
                              className="attachment-file-input"
                            />
                          </label>
                          <label for="audio_upload">
                            <svg
                              className="attachment-icon"
                              data-attr="audio"
                              height="511pt"
                              viewBox="-90 1 511 511.99899"
                              width="511pt"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m332.464844 275.082031c0-8.429687-6.835938-15.265625-15.269532-15.265625-8.433593 0-15.269531 6.835938-15.269531 15.265625 0 74.6875-60.757812 135.445313-135.445312 135.445313-74.683594 0-135.441407-60.757813-135.441407-135.445313 0-8.429687-6.835937-15.265625-15.269531-15.265625-8.433593 0-15.269531 6.835938-15.269531 15.265625 0 86.378907 66.320312 157.539063 150.710938 165.273438v41.105469h-56.664063c-8.433594 0-15.269531 6.835937-15.269531 15.269531 0 8.433593 6.835937 15.269531 15.269531 15.269531h143.871094c8.429687 0 15.265625-6.835938 15.265625-15.269531 0-8.433594-6.835938-15.269531-15.265625-15.269531h-56.667969v-41.105469c84.394531-7.730469 150.714844-78.894531 150.714844-165.273438zm0 0"></path>
                              <path d="m166.480469 372.851562c53.910156 0 97.769531-43.859374 97.769531-97.769531v-177.316406c0-53.90625-43.859375-97.765625-97.769531-97.765625-53.90625 0-97.765625 43.859375-97.765625 97.765625v177.316406c0 53.910157 43.859375 97.769531 97.765625 97.769531zm-67.230469-275.085937c0-37.070313 30.160156-67.226563 67.230469-67.226563 37.070312 0 67.230469 30.15625 67.230469 67.226563v177.316406c0 37.070313-30.160157 67.230469-67.230469 67.230469-37.070313 0-67.230469-30.160156-67.230469-67.230469zm0 0"></path>
                            </svg>
                            <input
                              type="file"
                              id="audio_upload"
                              accept="audio/*"
                              className="attachment-file-input"
                            />
                          </label>
                          <label for="video_upload">
                            <svg
                              className="attachment-icon"
                              data-attr="video"
                              height="472pt"
                              viewBox="0 -87 472 472"
                              width="472pt"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m467.101562 26.527344c-3.039062-1.800782-6.796874-1.871094-9.898437-.179688l-108.296875 59.132813v-35.480469c-.03125-27.601562-22.398438-49.96875-50-50h-248.90625c-27.601562.03125-49.96875 22.398438-50 50v197.421875c.03125 27.601563 22.398438 49.96875 50 50h248.90625c27.601562-.03125 49.96875-22.398437 50-50v-34.835937l108.300781 59.132812c3.097657 1.691406 6.859375 1.625 9.894531-.175781 3.039063-1.804688 4.898438-5.074219 4.898438-8.601563v-227.816406c0-3.53125-1.863281-6.796875-4.898438-8.597656zm-138.203124 220.898437c-.015626 16.5625-13.4375 29.980469-30 30h-248.898438c-16.5625-.019531-29.980469-13.4375-30-30v-197.425781c.019531-16.558594 13.4375-29.980469 30-30h248.90625c16.558594.019531 29.980469 13.441406 30 30zm123.101562-1.335937-103.09375-56.289063v-81.535156l103.09375-56.285156zm0 0"></path>
                            </svg>
                            <input
                              type="file"
                              id="video_upload"
                              accept="video/*"
                              className="attachment-file-input"
                            />
                          </label>
                        </div>
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