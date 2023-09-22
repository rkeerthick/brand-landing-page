import React from 'react'
import "./MainSection.css"
import image from "../../asset/image"
import Button from '../button/Button';

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="main-section-wrapper">
        <div className="details">
          <p className="details-heading">YOUR FEET DESERVE THE BEST</p>
          <p className='details-description'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="purchase-buttons">
            <Button name="Shop Now" />
            <Button name="Category" />
          </div>
          <div className="availability">
            <p>Also available on</p>
            <div className="avail-websites">
              <img src={image.Amazon} alt="" />
              <img src={image.Flipkart} alt="" />
            </div>
          </div>
        </div>
        <div className="publish-image">
          <img src={image.Shoe_Image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainSection