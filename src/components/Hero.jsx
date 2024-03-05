import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { DrugsCanvas } from "./canvas";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Unparalleld scientific expertise",
   "Quick turnaround", "Value addition", "Assured confidentiality", "On-time delivery","Interactive & Proven processes" ];
  const period = 150;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(80);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 bg-opacity-10` }>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-6 h-6 rounded-full bg-[#48d1cc]' />
          <div className='w-1 sm:h-80 h-40 green-pink-gradient'/>
        </div>

        <div>
          <h2 className={`${styles.sectionHeadText} text-[#48d1cc]`}>
          Welcome <span className='text-[#48d1cc]' > User</span>
          </h2>
          <p className={`text-[#dfd9ff] text-[40px] mt-2 text-secondary-100 text-sm`}>
            
            <span className="txt-rotate" dataPeriod="1000" data-rotate='["Unparalleld scientific expertise",
   "Quick turnaround", "Value addition", "Assured confidentiality", "On-time delivery","Interactive & Proven processes" ]'><span className="wrap">{text}</span></span>
          </p>
        </div>
      </div>
      
      

      <DrugsCanvas />

      <div className='absolute xs:bottom-1 bottom-22 w-full flex flex-col justify-center items-center text-white'>
      
        <a href='#about'>
          <div className='w-[29px] h-[58px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
       </div> 
    
    </section>
  );
};

export default Hero;
