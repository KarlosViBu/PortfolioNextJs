import { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "@/component/AnimatedText";
import Head from "next/head";
import Layout from "@/component/Layout";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import karlos1 from "../../public/images/profile/karlos_1.png";
import Skills from "@/component/Skills";
import Experience from "@/component/Experience";
import Studies from "@/component/Studies";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Carlos Villegas &nbsp; | Sobre mí</title>
        <meta name="description" content="A cerca de mi historia" />
      </Head>
      <main className={`${"fcenter"} flex-col  w-full`}>
        <Layout>
          <AnimatedText
            text="¡la pasión alimenta el propósito!"
            className="mb-14"
          />
          <div className="grid w-full grid-cols-8 gap-10">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase  text-primary">
                Biografía
              </h2>
              <div  className='font-medium text-justify dark:text-white'>

                <p>
                  Contador Público y Programador con experiencia en el manejo de cuentas contables, análisis de crédito financiero, gestión de nómina. Habilidad para programar BackEnd y FrontEnd en diferentes lenguajes.</p>
                <br />
                <p>
                  Nivel de inglés intermedio.</p>
                <br />
                <p>
                  Siempre en continuo aprendisaje y mejoramiento. Ahora he retomado estudios en NestJs con TypeScript y Tailwind CSS.</p>
              </div>
            </div>
            <div
              className={`col-span-3 relative h-max rounded-3xl border p-8 ${"kshadow"}`}
            >
              <Image
                src={karlos1}
                alt="Carlos Villegas"
                className="w-full h-auto"
                priority
                sizes="(max-width: 1200px) 50vw,
                     (max-width: 768px) 100vw,
                     33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-evenly  text-primary">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold tshadow14">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize">
                  Proyectos Completados
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold tshadow14">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize ">
                  Años de Experiencia
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Studies />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
