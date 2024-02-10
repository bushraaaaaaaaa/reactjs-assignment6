import React, { useState } from 'react';
import { Navbar } from './navbar';
import { Section1 } from './section1';
import { Section5 } from './section5';
import { FOOTER } from './FOOTER'; 
import { Product1 } from './product1';
import Productdetails from './productdetails';

const Mainwork = () => {
  let [details, setdetails] = useState(false);

  const detailpage = () => {
    setdetails(!details);
  };

  return (
    <div>
      <Navbar />
      {details ? (
        <Productdetails />
      ) : (
        <>
          <Section1 discount="30% OFF" />
          <div className="container-fluid section2 mb-2">
            <img src="\src\assets\Screenshot 2024-01-03 035906.png" alt="" />
          </div>
          <center>
            <h1 className="m-4">BEST SELL</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, harum.</p>
          </center>
          <div className="container-fluid">
            <div className="row shop">
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg" description="easy gold chair" title="easy chair" />
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg" description="easy gold chair" title="comfortable chair" />
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg" description="easy gold chair" title="chair" />
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg" description="easy gold chair" title="chair" />
            </div>
          </div>

          <Section5 />
          <center>
            <h1 className="m-4">ALL PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, harum.</p>
          </center>
          <div className="container-fluid">
            <div className="row shop">
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg" description="easy gold chair" title="chair" />
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-7.jpg" description="easy gold chair" title="chair" />
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-8.jpg" description="easy gold chair" title="chair" />
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg" description="easy gold chair" title="chair" />
            </div>
          </div>
          <div className="container-fluid">
            <div className="row shop">
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg" description="easy gold chair" title="chair" />
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-6.jpg" description="easy gold chair" title="chair" />
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-3.jpg" description="easy gold chair" title="chair" />
              <Product1 onClick={detailpage} price="$250" image="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-4.jpg" description="easy gold chair" title="chair" />
            </div>
          </div>
        </>
      )}
      <FOOTER />
    </div>
  );
};

export default Mainwork;
