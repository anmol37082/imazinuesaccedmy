"use client";

import Link from "next/link";

import styles from "./DigitalMarketing.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";

function DigitalMarketing() {
  const isMobileViewport = useMediaQuery("(max-width: 540px)");

  const videoSources = isMobileViewport
    ? {
        webm: "/video/digital%20marketing%20mobile%20view.webm",
        mp4: "/video/digital%20marketing%20mobile%20view.mp4",
      }
    : {
        webm: "/video/digital%20marketing.webm",
        mp4: "/video/digital%20marketing.mp4",
      };

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
          key={`${videoSources.webm}-${videoSources.mp4}`}
        >
          <source src={videoSources.webm} type="video/webm" />
          <source src={videoSources.mp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.buttonContainer}>
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
