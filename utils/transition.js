import React from "react";
import { motion } from "framer-motion";
import { LogoIcon } from "/utils/icons";

const Transition = (Component) => {
  const TransitionComponent = (props) => (
    <>
      <Component {...props} />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <LogoIcon color={"#FFF0E0"} color2={"#4E2705"} />
      </motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <LogoIcon color={"#FFF0E0"} color2={"#4E2705"} />
      </motion.div>
    </>
  );

  TransitionComponent.displayName = `Transition(${
    Component.displayName || Component.name || "Component"
  })`;

  return TransitionComponent;
};

export default Transition;
