import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = (props) => {
  return (
    <div>
      <img
        style={{
          position: "absolute",
          border: "none",
          outline: "none",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%)`,
        }}
        src="https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/Bonanza%20Update%20404%20Error%20Page%20(heavy%2c%20Update)-Jul-19-2021-07-05-03-72-PM.png?width=650&name=Bonanza%20Update%20404%20Error%20Page%20(heavy%2c%20Update)-Jul-19-2021-07-05-03-72-PM.png"
        alt="Error 404"
      />
      <Link to="/">
        <span
          style={{
            position: "absolute",
            top: "58%",
            left: "32.25%",
            fontSize: "11px",
            backgroundColor: "white",
            color: "#e91ec8",
            textDecoration: "underline",
          }}
        >
          home page
        </span>
      </Link>

      <span className="error-arrow" />
    </div>
  );
};

export default ErrorPage;
