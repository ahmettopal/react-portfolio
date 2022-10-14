import { useState } from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Navbar, Footer, Greetings, Skills } from '../components';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const onDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>React Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='md:min-h-screen 2xl:min-h-max bg-zinc-100 dark:bg-zinc-800'>
          <Navbar onMode={onDarkMode} darkMode={darkMode} />
          <Greetings />
        </section>
        <section className='flex justify-center dark:bg-zinc-700'>
          <Skills />
        </section>
      </main>

      <Footer />
    </div >
  )
}
