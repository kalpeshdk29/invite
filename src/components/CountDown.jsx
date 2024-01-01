import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = '2024-02-04T12:30:00'

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };


const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, [targetDate]);

return (
  <section className="countdown-section">
    <div className="countdown-banner header-countdown">
      <div className="countdown-value">
        <div className="timer days">{timeLeft.days}</div>
        <div className="title">Days</div>
      </div>
      <div className="countdown-value">
        <div className="timer hours">{timeLeft.hours}</div>
        <div className="title">Hours</div>
      </div>
      <div className="count-down-message">
        {" "}
        Countdown
        <br />
        to our big day!{" "}
      </div>
      <div className="countdown-value">
        <div className="timer min">{timeLeft.minutes}</div>
        <div className="title d-none d-sm-none d-md-block">Minutes</div>
        <div className="title d-sm-block d-md-none">Mins</div>
      </div>
      <div className="countdown-value">
        <div className="timer sec">{timeLeft.seconds}</div>
        <div className="title d-none d-sm-none d-md-block">Seconds</div>
        <div className="title d-sm-block d-md-none">Secs</div>
      </div>
    </div>
    <div className="row today-banner d-none">
      <div className="col-xs-12 today-message m-auto text-center">
        Today's the big day!
      </div>
    </div>
    <div className="row old-banner d-none">
      <div className="col-xs-12 today-message m-auto text-center">
        Thank you for being a part of our big day! Below are some memories we'd
        love to share...
      </div>
    </div>
  </section>
);
}
export default CountDown;
