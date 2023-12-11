import React from "react";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

const Spinner = ({ path = "login" }) => {
  // States
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <Layout>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />

        <h1 className="Text-center">
          Redirecting you to the login page in {count} seconds
        </h1>
      </div>
    </Layout>
  );
};

export default Spinner;
