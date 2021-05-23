import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/lottie0.json";
import { useHistory } from "react-router-dom";

function Landing() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let history = useHistory();
  const getStarted = () => {
    history.push("/meditations");
  };
  const blogs = () => {
    history.push("/blogs");
  };
  return (
    <div>
      <div className='landing-div'>
        <h1 className='branding'>
          <i class='ri-mental-health-line'></i>
          <i>Calmify</i>
        </h1>
        <div>
          <h3 className='tagline'>
            <span
              onClick={blogs}
              className='start bottom-btn'
              variant='primary'
            >
              Learn about Meditation! <i class='fas fa-angle-right'></i>
            </span>
            <i>So what is a good meditator? The one who meditates . </i>
          </h3>
          <h3 className='tagline'>
            <i>
              Your goal is not to battle with the mind, but to witness the mind.
            </i>
            <span
              onClick={getStarted}
              className='start bottom-btn'
              variant='primary'
            >
              Practice meditation! <i class='fas fa-angle-right'></i>
            </span>
          </h3>
        </div>

        <Lottie options={defaultOptions} height={550} width={600} />
      </div>
    </div>
  );
}

export default Landing;
