import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {

   return (
      <motion.div className='fcenter ring-4 ring-offset-2 ring-primary rounded-full font-semibold bg-dark text-light px-5 py-2 shadow-dark cursor-pointer absolute shadow-xl dark:bg-light dark:text-dark dark:shadow-gray-300'
      whileHover={{scale:1.15}}
      initial={{x:0, y:0}}
      whileInView={{ x:x, y:y }}
      transition={ { duration: 0.6 } }
      >
         { name }
      </motion.div>
   )
}

const Skills = () => {
  return (
   <div className='my-20'>
    <h2 className='font-bold text-6xl my-30 mt-52  w-full text-center  text-primary py-2 tshadow14'> 
      Habilidades
   </h2>
   <div className={`${'fcenter'} w-full h-screen relative rounded-full bg-circularLight dark:bg-circularDark`}>
      <motion.div className='fcenter rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer transition-all ease-out duration-600 ring-4 ring-offset-2 ring-primary shadow-xl dark:bg-light dark:text-dark dark:shadow-gray-400'
      whileHover={{scale:1.15}}
      >
         Web
      </motion.div>
      
      <Skill name="HTML" x="23vw" y="0vw"/>
      <Skill name="CSS" x="0vw" y="-9vw"/>
      <Skill name="Mysql" x="0vw" y="-18vw"/>
      <Skill name="Mysqlite" x="0vw" y="18vw"/>
      <Skill name="Mongo" x="-20vw" y="19vw"/>
      <Skill name="Supabase" x="36vw" y="-8vw"/>
      <Skill name="Postgres" x="-36vw" y="-8vw"/>
      <Skill name="React" x="-15vw" y="-10vw"/>
      <Skill name="PHP" x="-25vw" y="-17vw"/>
      <Skill name="Python" x="25vw" y="17vw"/>
      <Skill name=".Net6" x="25vw" y="-17vw"/>
      <Skill name="NextJs" x="18vw" y="8vw"/>
      <Skill name="Angular" x="15vw" y="-10vw"/>
      <Skill name="Tailwind" x="0vw" y="9vw"/>
      <Skill name="Javascript" x="-23vw" y="-0vw"/>
      <Skill name="Oracle" x="-18vw" y="8vw"/>
      <Skill name="SqlServer" x="-36vw" y="8vw"/>
   </div>
   </div>
  )
}

export default Skills