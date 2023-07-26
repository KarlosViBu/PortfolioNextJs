import Link from "next/link"
import { CircularCVB, CircularText } from "./icons"

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex justify-center items-center overflow-hidden'>
      <div className={`${'fcenter'} w-40 h-auto relative`}>
         <CircularCVB className={'dark:fill-light animate-spin-slow' }/>

         <Link href="mailto:carlosurielvillegas@gmail.com" 
            className={`${'fcenter'} ${'kshadow'} 
               p-3 absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-1/2 bg-dark text-light text-[12px]
                text-bold w-20 h-20 rounded-full shadow-lg shadow-green-500
                hover:bg-light hover:text-dark hover:text-[14px] hover:scale-110  transition duration-500`}
         >Contáctame</Link>
      </div>
   </div>
  )
}

export default HireMe