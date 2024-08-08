'use client'

import styles from './page.module.css'
import Accordion from "./components/Accordion/Accordion";
import CTA from "./components/CTA/CTA";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Frequently asked questions</h1>
        <p>Choose any questions you need</p>
      </div>
      <Accordion />
      <CTA />
    </main>
  );
}
