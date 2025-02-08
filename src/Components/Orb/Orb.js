import React from "react";
import { useWindowSize } from "../../utils/useWindowSize";
import "./Orb.css"; // Import the external CSS file

function Orb() {
  const { width, height } = useWindowSize();

  // Pass dynamic values via inline style or CSS variables
  const style = {
    "--width": `${width}px`,
    "--height": `${height / 2}px`,
  };

  return <div className="orb" style={style}></div>;
}

export default Orb;
