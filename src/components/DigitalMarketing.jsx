"use client";

import Link from "next/link";

import styles from "./DigitalMarketing.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";

function DigitalMarketing() {
  const isMobileViewport = useMediaQuery("(max-width: 540px)");

  const videoSource = isMobileViewport
    ? "/video/digital%20marketing%20mobile%20view.mp4"
    : "/video/digital%20marketing.mp4";

  return (
    <section className={styles.section}>
      <div className={styles.videoFrame}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          key={videoSource}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Link href="#inquiry" className={styles.enrollButton}>
          <span className={styles.btnLabel}>ENROLL NOW</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.btnIcon}
            aria-hidden="true"
          >
            <g opacity="1">
              <circle cx="10.2004" cy="7.1999" r="1.8" fill="currentColor" />
              <circle cx="10.2004" cy="16.8" r="1.8" fill="currentColor" />
              <circle cx="14.9992" cy="12.0002" r="1.8" fill="currentColor" />
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default DigitalMarketing;
