import {  useInView,motion,useAnimation } from 'framer-motion';
import { useRef,useEffect } from "react";

const RevealHeading = ({ children, targetId }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
    console.log(isInView);
  },[isInView])
  return (
    <motion.div ref={ref}  variants={{
    hidden:{opacity:0,y:75},
    visible:{opacity:1,y:0},
    }}
    initial="hidden"
    animate={mainControls}
    transition={{duration:0.5,delay:0.35}}
    
     
    >
      {children}
   
  </motion.div  >
  );
};

export default RevealHeading;
