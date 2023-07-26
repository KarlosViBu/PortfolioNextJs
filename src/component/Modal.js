import { useState } from "react"
import { ClearIcon } from "./icons"

const Modal = ({ isVisible, onClose, children  }) => {
   if ( !isVisible ) return null
   
   const handleClose = (e) => {
      if( e.target.id === 'wrapper' ) onClose()
   }
  return (
    <div id="wrapper"
    className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm fcenter' onClick={handleClose} >
      <div className='w-1/2 flex flex-col' >
         <ClearIcon className='w-30 place-self-end bg-white' onClick={() => onClose()} />
         {/* <button className='text-white font-bold text-xl place-self-end' onClick={() => onClose()}
         >x</button> */}
         <div className='bg-white/75 p-2 '>
         { children }
         </div>

      </div>
   </div>
  )
}

export default Modal