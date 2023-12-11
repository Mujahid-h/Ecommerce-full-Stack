import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <Toaster />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      ,
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Style Makers - Let's be classy",
  description: "Come and Shop with Us!",
  keywords: "NodeJS, ReactJS, ExpressJS, MongoDb",
  author: "Style Makers",
};

export default Layout;
