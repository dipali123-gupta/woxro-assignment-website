import React from "react";
import background from "./Image-resource/banner.jpg";

function Banner() {
  const myStyle = {
    backgroundImage: "url('./Image-resource/banner.jpg')",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "80vh",
        //marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
        
      }}
    ></div>
  );
}

export default Banner;
