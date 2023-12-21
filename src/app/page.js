'use client'

import HeaderComponent from "@/components/HeaderComponents";
import Hero from "@/components/Hero";

import styles from "@/constants/styles";

export default function Home() {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} flex flex-col`}>
      <div className={`${styles.boxWidth} bg-[#F1F9F7]`}>
        <HeaderComponent />
      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  );
}