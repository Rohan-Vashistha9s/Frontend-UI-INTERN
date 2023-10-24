import React, { useEffect } from "react";
import { controls } from "../Data/schema";
import "../Styles/control.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Control = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    vissible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="feature__controls"
    >
      <div className="control__container">
        <div className="control__text">
          <h1>Why Density?</h1>
          <p>
          Empower your trading strategy with access to cutting-edge technology and advanced trading tools.
          </p>
          <button>Trade Now</button>
        </div>
        <div className="control__content">
          {controls.map((control, index) => (
            <div className="control" key={index}>
              <div className="control__icon">
                <control.icon />
                <p>hi </p>
              </div>

              <div className="control__text__content">
                <p>{control.name}</p>
                <h1>125x your Leverage.</h1>
                <br />
                <span>
                Maximize Your Trading Potential with upto 125x Leverage. Always ensure you use leverage with proper risk management.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Control;
