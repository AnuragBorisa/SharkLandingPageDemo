import {  useInView } from 'framer-motion';
import { useRef, } from "react";

const RevealHeading = ({ children, targetId }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      {console.log(isInView)}
    <span
      style={{
    
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      {children}
    </span>
  </section>
  );
};

export default RevealHeading;
