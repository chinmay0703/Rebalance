import './clinic.css';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useRef, useEffect, useState } from 'react';

const BasicExample = () => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });
    observer.observe(componentRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`scrolling-componentty ${isVisible ? 'visible' : ''}`} ref={componentRef}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Why is Physiotherapy important?
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center"> {/* Add text-center class */}
          <Dropdown.ItemText className="middddddd">Post-surgery rehabilitation, Reduce or eliminate pain, Recover and prevent sports injuries, Pregnancy and post-partum care and Neuro cases rehabilitation.</Dropdown.ItemText>
        </Dropdown.Menu>
      </Dropdown>

      <h3> </h3>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          How long does a physiotherapy session last?
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center"> {/* Add text-center class */}
          <Dropdown.ItemText className="middddddd">The initial session that includes history taking, examination and diagnosis usually takes around 45 minutes. Following that, the physiotherapy sessions can be around 35-45 minutes.</Dropdown.ItemText>
        </Dropdown.Menu>
      </Dropdown>

      <h3> </h3>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          How do I schedule an appointment?
        </Dropdown.Toggle>
        <Dropdown.Menu className="text-center"> {/* Add text-center class */}
          <Dropdown.ItemText className="middddddd">You can book an appointment with us by contacting us at +917721099005.</Dropdown.ItemText>
        </Dropdown.Menu>
      </Dropdown>

      <br></br>
    </div>
  );
};

export default BasicExample;
