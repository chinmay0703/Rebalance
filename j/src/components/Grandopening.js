import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './clinic.css';
import er from './images/ytyy.jpg';

const SpecialOffer = () => {
  const [flash, setFlash] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    loop: { reverse: true },
  }));

  useEffect(() => {
    setFlash({ opacity: 1 });
  }, [setFlash]);

  return (
    <div>    <animated.div style={flash} className="special-offer">
      <img src={er} className='fg' alt="dfd"></img>
      {/* Special offer content */}
      {/* <h1 style={flash}> Grand Opening Special!</h1> */}
      <animated.p > </animated.p>
    </animated.div>
    <p className='text-center mx-4'>Book your initial consultation now and receive a discount on your first treatment session. Don't miss this opportunity to embark on your path to optimal health and wellness.</p>
      <br>
      </br></div>

  );
};

export default SpecialOffer;
