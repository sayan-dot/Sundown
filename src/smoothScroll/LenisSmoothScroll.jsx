import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

function LenisSmoothScroll({ children }) {
  return (
    <ReactLenis root options={{
        smoothTouch:true,duration:1.4
      }}>
      {children}
    </ReactLenis>
  );
}

export default LenisSmoothScroll;
