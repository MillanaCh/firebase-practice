import React from "react";
import Header from "../components/commons/Header";
import Footer from "../components/commons/Footer";
export default function Support() {
  return (
    <>
      <Header />
      <div className="supportBackground"><h1>Contact Apple Support</h1></div>
      <h1 style={{textAlign:"center", padding:"15px"}}>We're here to help</h1>
      <div className="support-p">
       <article className="article-support">
         <h2>Support by phone</h2>
         <p>You can talk to an Apple Advisor by calling the Apple Support phone number for your country or region.</p>
       </article>
       <article className="article-support">
         <h2>Get help with purchases</h2>
         <p>Check order status or learn about Apple Trade in. Buy an AppleCare plan or shop for products and accessories.</p>
       </article>
      </div>
      <div>
        <h2 style={{textAlign:"center"}}>Get support anywhere</h2>
       <article className="article-center-support">
          <p>Use the Apple Support app to find answers about your products, talk to an expert, or make a repair reservation.</p>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/mac/featured-section-apple-support-app_2x.png" width="230px"/>
       </article>
      </div>
      <div style={{marginBottom:"30px"}}>
        <h2 style={{textAlign:"center"}}>My Support</h2>
       <article className="article-center-support">
          <p>Get up to date information about your Apple products in one place including repairs, tech support cases, and much more.</p>
          <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-my-support_2x.jpg" width="230px"/>
       </article>
      </div>
      <Footer/>
    </>
  );
}