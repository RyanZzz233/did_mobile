import Image from "next/image";
import React from "react";
import styles from './page.module.css'

const Footer = () => {
  //console.log("Hello")

  return (
    <div className={styles.container}>
      <div className="text-xxxs sm:text-xs lg:text-md">@Meta Metopia Technology Company Limited</div>
      <div>
        <div className={styles.social}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/1.png" width={15} height={15} className={styles.icon} alt="FB"/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/2.png" width={15} height={15} className={styles.icon} alt="IG"/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/3.png" width={15} height={15} className={styles.icon} alt="TT"/>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src="/4.png" width={15} height={15} className={styles.icon} alt="YT"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;