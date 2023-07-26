import React from 'react';
import './clinic.css';
import im from './images/black.png'

const OfferCard = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="poster"><img src={im} alt="Location Unknown" /></div>
        <div className="details">
          <h1>Special offers</h1>
          <h2>Rebalance Physiotherapy clinic</h2> 
          <p className="desc">
            <h6>For 1 Joint</h6>
            <li>
                <ui>
                    (1 Week) - 3500 /-
                </ui>
               
            </li>
            
            <li>
            <ui>
            (2 Weeks) - 6300 /-
                </ui>
            </li>
            <li>
            <ui>
            (3 Weeks) - 8925 /-
                </ui>
            </li>
            <li>
            <ui>
            (1 Month) - 12000 /-
                </ui>
            </li>
            <br></br>
            <h6>For 2 Joints</h6>
            <li>
            <ui>
            (1 Week) - 4200 /-
                </ui>
            </li>
            <li>
            <ui>
            (2 Weeks) - 7650 /-
                </ui>
            </li>
            <li>
            <ui>
            (3 Weeks) - 10710 /-
                </ui>
            </li>
            <li>
            <ui>
            (1 Month) - 12000 /-
                </ui>
            </li>
           </p>
          <div className="cast">
         
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default OfferCard;
