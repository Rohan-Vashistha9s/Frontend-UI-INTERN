import React, { useEffect } from "react";
import { density1, density2, density3 } from "../Images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../Styles/dashboardPreview.scss";
import { Box, styled } from '@mui/material'




//material ui

const Component =styled(Box)`
   position:relative;
   display:flex;
`;
const Image = styled('img')({
  left:'12rem',
  margin:'auto',
  top:'2rem',
  border:'1px solid white',
  position:'absolute',
  width: '5rem',
  height:'31.9rem'

})
const Image2 = styled('img')({
  position: 'absolute',
  display: 'flex',
  width:'10%',
  left:'25rem',
  border:'1px solid white',
});

const Image3 = styled('img')({
  position:'relative',
  display: 'flex',
  left:'38rem',
  border:'1px solid white',
  width: '5rem',
  height:'31.9rem',
  top:'2rem',
})

const DashboardPreview = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    vissible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="app__dashboard"
    >
      <Component>
        <Image  src={density2} alt="" draggable={false} />
        <Image3   src={density3} alt="" draggable={false}/>
        <Image2  src={density1} alt="" draggable={false} />
      </Component>
    </motion.div>
  );
};

export default DashboardPreview;
