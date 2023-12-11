import React from "react";
import Layout from "../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiLogoWhatsapp } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any kind of query about the products, Fell free to contact.
          </p>
          <p className="mt-3">
            <BiMailSend /> : hmujahid08@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +92 3162074558 || +92 3193506026
          </p>
          <p className="mt-3">
            <BiLogoWhatsapp /> : +92 3162074558 || +92 3461952739
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
