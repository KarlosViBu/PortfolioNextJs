import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import TwitterIcon, { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./icons";
import { motion } from "framer-motion";
import useThemeSwich from "./hooks/useThemeSwich";

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  // console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      { title }
      <span 
      className={`h-[3px] inline-block  bg-primary absolute left-0 -top-1 group-hover:w-full transition-[width] ease duration-500 ${router.asPath === href ? 'w-full': 'w-0'}`}
      >&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwich();
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center dark:text-light">
      <nav className="flex justify-between items-center">
        <CustomLink className='mr-4' title="Inicio"    href="/" />
        <CustomLink className='mx-4' title="Sobre Mí"  href="/about" />
        <CustomLink className='ml-4' title="Proyectos" href="/projects" />
      </nav>

      <nav className='flex justify-center items-center flex-wrap'>
        <motion.a href="/" target={"_blank"} className='w-7 mr-2' whileHover={{ y:-2 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a href="/" target={"_blank"} className='w-6 ml-2' whileHover={{ y:-2 }}
        >
          <LinkedInIcon />
        </motion.a>

        <button 
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className='ml-3 fcenter p-1 rounded-full'
        >
          
          {
            mode === "dark" 
            ? <SunIcon />
            : <MoonIcon className={'fill-black'}/>
          }
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
