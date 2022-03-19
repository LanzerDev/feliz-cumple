import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import sound from './audio/carryOn.mp3'
import chibi from './img/dance-chibi.gif'

function App() {

  const audio = new Audio(sound)
  const [isOpen, setIsOpen] = useState(false)
  const [playing, setPlaying] = useState(false);


  useEffect(() => {
    playing ? audio.play() : audio.pause();

    // This is cleanup of the effect
    return () => audio.pause();

  }, [playing]);
  const start = () => {

    setIsOpen(s => !s)
    setPlaying(s => !s);
  }

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <React.Fragment>
      <div className='container'>
      <motion.h1
      onClick={() => start()}
      animate={{scale: 1}}
      whileTap={{scale: 0.6}}
      >FELIZ CUMPLE WE TIAMO ALV</motion.h1>
      </div>
      <motion.div
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={variants}
      className='chibi-container'>
        <img src={chibi} className={'chibi'}/>
      </motion.div>
    </React.Fragment>
  )
}

export default App
