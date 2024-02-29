import {  useInView,motion,useAnimation } from 'framer-motion';
import { useRef,useEffect } from "react";

const LeftToRight = ({ children, targetId }) => {
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
    hidden:{opacity:0,x:-75},
    visible:{opacity:1,x:0},
    }}
    initial="hidden"
    animate={mainControls}
    transition={{duration:0.5,delay:0.25}}
    
     
    >
      {children}
   
  </motion.div  >
  );
};

export default LeftToRight;
