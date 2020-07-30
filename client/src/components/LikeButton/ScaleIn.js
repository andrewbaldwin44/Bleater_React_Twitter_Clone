import React from "react";
import { useSpring, animated } from "react-spring";

function ScaleIn({ children }) {
  const style = useSpring({
    to: {
      transform: 'scale(1.001)'
    },
    from: {
      transform: 'scale(0)'
    },
    config: {
      tension: 250,
      friction: 12,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
}

export default ScaleIn;
