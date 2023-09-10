import React, {useState} from "react";
import emmy_logo from '../assets/images/emmy-ride-logo.png';
import coming_soon_bg from '../assets/images/coming-soon-background.png';

const Home = () => {

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  setInterval(
    () => {
      let countDownDate = new Date("Sep 9, 2024 15:37:25").getTime();
      let now = new Date().getTime();
      let distance = countDownDate - now;

      setDays(()=> Math.floor(distance / (1000 * 60 * 60 * 24)) );
      setHours( ()=> Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(()=> Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(() => Math.floor((distance % (1000 * 60)) / 1000));

    }, 1000
  );


  return (
    <div>
      <section>
        <div className="text-center">
          <img src={emmy_logo} className="img-fluid" alt="company logo"/>
        </div>
      </section>
      <section>
        <div className="text-center mt-md-5 py-md-4">
          <img src={coming_soon_bg} className="img-fluid" alt="background"/>
        </div>
      </section>
      <br/><br/>
      <section className="mt-md-5">
        <div className="d-flex flex-row align-content-center justify-content-center gap-4">
          <div>
            <p id="days" className="text-center">
              <h1>
                {
                  days
                }
              </h1>
            </p>
            <p>Days</p>
          </div>
          <div>
            <p id="hours" className="text-center">
              <h1>
                {
                  hours
                }
              </h1>
            </p>
            <p>hours</p>
          </div>
          <div>
            <p id="minutes" className="text-center">
              <h1>
                {
                  minutes
                }
              </h1>
            </p>
            <p>minutes</p>
          </div>
          <div>
            <p id="seconds" className="text-center">
              <h1>
                {
                  seconds
                }
              </h1>
            </p>
            <p>seconds</p>
          </div>
        </div>
      </section>
    </div>
  )

};

export default Home;
