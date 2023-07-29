import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";
import Modal from "./Modal";

// import diploma2 from "../../public/images/Studies/ContadorPublico.png";
// import diploma1 from "../../public/images/Studies/Diplomado_Web.png";

const Details = ({ programa, entidad, entLink, time, address }) => {

  const ref = useRef(null)
  return (
    <div ref={ ref }  className="my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex  flex-col  justify-center">
      <LiIcon reference={ ref } />
      <Fragment>
        <h3 className="capitalize font-bold text-2xl dark:text-light  flex justify-between">
          {" "}
          {programa}&nbsp;
          <a
            href={entLink}
            target="_blank"
            className="text-primary capitalize text-xl "
          >
            @{entidad}
          </a>
        </h3>
        <div className='flex justify-between text-dark/75 dark:text-gray-400 mb-3'>
          <span className="caption-top font-medium">{time}</span>
          <span>{address}</span>
        </div>
      </Fragment>
    </div>
  );
};

const Studies = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  
  const diploma1="https://res.cloudinary.com/drxhdbob1/image/upload/v1690600285/Diplomado_Web_wxoxpr.png"
  const diploma2="https://res.cloudinary.com/drxhdbob1/image/upload/v1690600256/ContadorPublico_bebmie.png"
  return (
    <div className="my-40">
      <h2 className="font-bold text-6xl mb-32 w-full text-center tshadow14 text-primary">
        Formación Académica
      </h2>
      <div ref={ref} className="w-[80%] mx-auto relative">
        {/* <motion.div 
          style={{ scaleY: scrollYProgress}}
           className="absolute left-1 top-0 w-[4px] h-full bg-green-800 origin-top" /> */}
        <div className='w-full flex flex-col justify-center ml-4'>

          <Details
            programa="Diplomado en Programación"
            entidad="Universidad de Caldas"
            entLink="https://www.ucaldas.edu.co/"
            time="2022"
            address="Manizales, Caldas, Colombia"
          />
          <button 
               className='text-primary text-lg font-bold underline underline-offset-2 mt-[-4.4rem]'
               onClick={ () => setShowModal1(true)}
          >
               Título
          </button>
          <Modal isVisible={showModal1} onClose={ () => setShowModal1(false)} >
              <img src={diploma1} width={'100%'} height={200} alt="adsd"/>
               {/* <Image className='w-full h-auto fcenter' 
                  src={diploma1}
                  alt="Carlos Villegas" 
                  priority
                  sizes="(max-width: 1200px) 50vw,
                     (max-width: 768px) 100vw,
                     50vw"
                  /> */}
            </Modal>
          <Details
            programa="Contaduría Pública"
            entidad="Universidad de Manizales"
            entLink="https://umanizales.edu.co/"
            time="1999"
            ntitulo={2}
            address="Manizales, Caldas, Colombia"
          />
          <button 
               className='text-primary text-lg font-bold underline underline-offset-2 mt-[-4.4rem]'
               onClick={ () => setShowModal2(true)}
          >
               Título
          </button>
          <Modal isVisible={showModal2} onClose={ () => setShowModal2(false)} >
              <div className='fcenter bg-transparent' >
              <img src={diploma2} width={'60%'} height={200} alt="adsd"/>  
               {/* <Image className='w-[380px] h-auto rounded-3xl fcenter' 
                  src={diploma2}
                  alt="Carlos Villegas" 
                  priority
                  sizes="(max-width: 1200px) 50vw,
                     (max-width: 768px) 100vw,
                     50vw"
                  /> */}
              </div>
          </Modal>
          <Details
            programa="Ingeniería Industrial"
            entidad="Universidad Nacional"
            entLink="https://www.manizales.unal.edu.co/"
            time="1990"
            ntitulo={0}
            address="Manizales, Caldas, Colombia"
          />
            <button 
               className='text-primary text-lg font-bold cursor-default mt-[-4.4rem] '
          >
               4 Semestres
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studies;
