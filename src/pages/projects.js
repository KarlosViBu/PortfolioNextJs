import Head from "next/head";
import Link from "next/link";
import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Image from "next/image";

// import fabulhadaPic from "../../public/images/projects/FabulHada.png";
// import gifExpertPic from "../../public/images/projects/GifExpert.png";
// import openJiraPic from "../../public/images/projects/openJira.png";
// import MascotaFelizPic from "../../public/images/projects/MascotaFeliz.png";
import { GithubIcon } from "@/component/icons";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border p-8 kshadow">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-xl"
      >
         <img src={img} width={'100%'} height={200} alt="adsd"/>
         {/* <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 1200px) 50vw,
                   (max-width: 768px) 100vw,
                   33vw"
        /> */}
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-3 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="text-justify dark:text-light"> {summary} </p>
        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-4 boton1 hover:dark:ring-4"
          >
            Visitar
          </Link>
          <Link href={github} target="_blank" className="w-10 dark:text-light">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full fcenter flex-col rounded-3xl border p-8 kshadow relative">
      {/* <div className='absolute -inset-1.5 bg-gradient-to-r from-green-800 to-green-500 rounded-lg -z-10 blur'></div> */}

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-xl"
      >
         <img src={img} width={'100%'} height={200} alt="adsd"/>
        {/* <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 1200px) 50vw,
                   (max-width: 768px) 100vw,
                   50vw"
        /> */}
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-3"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="dark:text-light"> {summary} </p>
        <div className="mt-2 w-full flex items-center justify-between">
          <Link href={link} target="_blank" className="ml-4 boton1">
            Visitar
          </Link>
          <Link href={github} target="_blank" className="w-10 dark:text-light">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function projects() {
  const fabulhadaPic =
    "https://res.cloudinary.com/drxhdbob1/image/upload/v1690478477/fabulhada_sks6sc.png";
  const gifExpertPic =
    "https://res.cloudinary.com/drxhdbob1/image/upload/v1690478477/GifExpert_cwqfiw.png";
  const openJiraPic =
    "https://res.cloudinary.com/drxhdbob1/image/upload/v1690478475/OpenJira_qencga.png";
  const MascotaFelizPic =
    "https://res.cloudinary.com/drxhdbob1/image/upload/v1690478478/MascotaFeliz_seubjo.png";
  return (
    <>
      <Head>
        <title>Carlos Villegas &nbsp;| Proyectos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full mb-15 fcenter flex-col">
        <Layout className="p-15">
          <AnimatedText
            text="¡la imaginación triunfa sobre el conocimiento!"
            className="p-15 mb-20"
          />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                type="Web"
                title="FabulHada"
                img={fabulhadaPic}
                link="https://fabulhada-3.vercel.app/"
                github="https://github.com/KarlosViBu/fabulhada-3/tree/main"
                summary="Tienda de productos artesanales, elaborados a mano por el artista, en porcelanicrón y elementos reciclados. Tecnología: Next.js, NextAuth, MongoAtlas, Cloudinary,  Paypal, Tailwind CSS, Typescript"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Web"
                title="Gif Expert"
                img={gifExpertPic}
                link="https://karlosvibu.github.io/react-gifexpert/"
                github="https://github.com/KarlosViBu/react-gifexpert"
                summary="Ësta pequeña aplicación React que sirve para obtener imágenes o gifs basados en la api GIPHY.
                  "
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Web"
                title="OpenJira"
                img={openJiraPic}
                link="https://03-open-jira-virid.vercel.app/"
                github="https://github.com/KarlosViBu/TareasNextJs"
                summary="App de tareas en NextJs, MongoAtlas. Se elaboro un proceso de arrastrar y soltar. "
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Web"
                title="Mascota Felíz"
                img={MascotaFelizPic}
                link="#"
                github="https://github.com/KarlosViBu/fabulhada-3/tree/main"
                summary="Web para ofrecer servicios y productos para mascotas. 
                   Que usa microservicios de Sengrid, proceso elaborado en Python, Backend: Rest Api Node.js, Express y LoopBack4.
                  Frontend: Angular, MongoAtlas, Cloudinary y Material UI."
              />
            </div>
          </div>
          {/* <Kgrid /> */}
        </Layout>
      </main>
    </>
  );
}
