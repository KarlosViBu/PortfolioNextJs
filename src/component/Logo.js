import Link from "next/link"
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
   <div className='flex justify-center items-center mt-2'>
      <MotionLink href="/"
         className='w-16 h-16 bg-dark dark:ring-light dark:ring-2 text-light flex justify-center items-center rounded-full text-3xl font-bold
         '
         whileHover={{
            backgroundColor:["#121212", "rgba(13, 18, 136)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"], 
            transition:{duration:1, repeat: Infinity}
            }}
         >
         C <span className='text-primary'>V</span>
      </MotionLink>
   </div>
  )
}

export default Logo