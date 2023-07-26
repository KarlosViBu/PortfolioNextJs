import Link from "next/link"
import Layout from "./Layout"
// import { whatsappIcon } from "./icons"
// import  whatsappIcon  from "./whatsappIcon"
import { WhatsappIcon } from "./icons"

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-primary shadow-lg shadow-[#4a4a]'>
      <Layout className="py-3 flex items-center  dark:text-light justify-between">
         <span>{ new Date().getFullYear()} &copy;</span>
         <div className='flex items-center'>
            +1 857 3919536 <WhatsappIcon  className={ 'w-5 mx-2 -mt-5' }/>
         </div>
         <Link href="/">Carlos Villegas</Link>
      </Layout>
    </footer>
  )
}

export default Footer