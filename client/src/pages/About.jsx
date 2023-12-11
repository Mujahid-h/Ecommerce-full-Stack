import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Style Maker"}>
      <div className="row contactus mt-3 mb-3">
        <div className="col-md-6 ">
          <img
            src="/images/about.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h3 className="bg-dark p-2 text-white text-center">
            About Style Maker
          </h3>
          <p className="text-justify mt-2">
            Welcome to Style Maker, At Style Maker, we bring you affordable
            fashion that radiates class and sophistication. Our collection
            includes trendy T-shirts, polo shirts, caps, trousers, and more to
            cater to your style needs. With prices that won't break the bank, we
            deliver high-quality clothing that exceeds expectations. Our
            transparent fixed pricing ensures value for your money. Join the
            growing community of fashion enthusiasts who appreciate our durable
            and comfortable garments. Experience the joy of precise and
            affordable fashion at Style Maker.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
