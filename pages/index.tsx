// import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from '@next/font/google';
// import styles from '@/styles/Home.module.css';

// const inter = Inter({ subsets: ['latin'] });
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>¡Bienvenido a mi sitio web!</h1>
      <p>Este es el contenido de la página de inicio.</p>
    </Layout>
  );
}