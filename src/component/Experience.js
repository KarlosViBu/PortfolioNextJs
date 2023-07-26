import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, cpLink, time, address, work }) => {

  const ref = useRef(null)
  return (
    <div ref={ ref }  className="my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex  flex-col items-center justify-between dark:text-light">
      <LiIcon reference={ ref } />
      <div>
        <h3 className="capitalize font-bold text-2xl flex justify-between ">
          {" "}
          {position}&nbsp;
          <a
            href={cpLink}
            target="_blank"
            className="text-primary capitalize text-xl "
          >
            @{company}
          </a>
        </h3>
        <div className='flex justify-between  text-dark/75 dark:text-gray-400 mb-3'>
          <span className="caption-top font-medium">{time}</span>
          <span>{address}</span>
        </div>
        <p className='text-justify text-md  w-full '>{work}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-40">
      <h2 className="font-bold text-6xl mb-32 w-full text-center tshadow14 text-primary">
        Experiencia
      </h2>
      <div ref={ref} className="w-[80%] mx-auto relative">
        <motion.div 
          style={{ scaleY: scrollYProgress}}
           className="absolute left-9 top-0 w-[4px] h-full bg-primary origin-top" />
        <div className="w-full flex flex-col items-center justify-between ml-4 ">
          <Details
            position="Grocery"
            company="Market Basket"
            cpLink="https://www.yelp.com/biz/market-basket-somerville"
            time="2020-Presente"
            address="400 Somerville Ave Somerville, MA 02144"
            work="Trabajo en Grocery Apoyo a mi jefe de almacén. 
            Ayudo a descargar mercancía. 
            Eficaz en situaciones de presión de tiempo o de conflicto, lo que me permite responder y trabajar con alto desempeño a pesar de las dificultades. 
            Resuelvo conflictos de manera asertiva, analizo la situación y de determino las causas y efectos de las acciones que puedan tomarse. 
            Tengo comunicación efectiva con mis interlocutores. Identifico y satisfago las necesidades de otros, de modo cordial y empático. 
            Determino metas, establezco prioridades en la ejecución de tareas, para cumplir objetivos de manera ordenada y puntual. 
            Realizo tareas que implican atención al detalle, sigo un ritmo adecuado de trabajo y verifico continuamente los procesos. 
            Dirijo mis actos y esfuerzos a la consecución de metas y objetivos, para ello establezco estrategias
            "
          />
          <Details
            position="Auxiliar de Bodega"
            company="Fresh Ideas"
            cpLink="https://www.freshideas.com/"
            time="2018-2022"
            address="18 Bunker Hill Industrial Park, Boston, MA 02129"
            work="Capacitado para manejar Montacargas. 
            Suministrar insumos a mis compañeros de trabajo para que los procesen. Registrar Entradas y Salidas de Inventario. 
            Mantener ordenado y limpio el lugar de trabajo."
          />
          <Details
            position="Asistente Contable"
            company="Empaques del Cauca S.A"
            cpLink="https://www.empaquesdelcauca.com.co"
            time="2015-2016"
            address="Calle 10N #9-60. Popayán, Cauca, Colombia"
            work="Saneamiento Contable, revisión de las cuentas de Balance y del Sistema de Costos 
            Elaboración de Presupuesto de Producción 2021.  Análisis de Cartera, registro de nómina, consolidación de primas, cesantías, vacaciones y ajustes a las cuentas de seguridad social.  Elaboración de Inventarios de Materias Prima y de la Bodega de Insumos y elementos de Mantenimiento."
          />
          <Details
            position="Programador"
            company="Drogas S.A"
            cpLink="#"
            time="20+ años atrás"
            address=''
            work="Como developer, fui contratado en mi ciudad natal, Manizales, por una cadena de medicamentos
            para el desarrollo e implantación de los puntos de venta en Manizales, Software desarrollado en Clipper5 y base de datos Foxpro.
           "
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
