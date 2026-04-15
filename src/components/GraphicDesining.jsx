"use client";

import Link from "next/link";

import styles from "./GraphicDesining.module.css";
import useMediaQuery from "@/hooks/useMediaQuery";

const OPEN_COUNSELLING_EVENT = "openCounsellingModal";

function GraphicDesining() {
  const isMobileViewport = useMediaQuery("(max-width: 540px)");

  const handleOpenCounselling = (event) => {
    event.preventDefault();
    window.dispatchEvent(new Event(OPEN_COUNSELLING_EVENT));
  };

  const videoSources = isMobileViewport
    ? {
        webm: "/video/graphicdesignphone.webm",
        mp4: "/video/graphic%20design%20phone.mp4",
      }
    : {
        webm: "/video/graphic%20design.webm",
        mp4: "/video/graphic%20design_1.mp4",
      };

  return (
    <section className={styles.section} id="courses">
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
        <Link
          href="#inquiry"
          className={styles.enrollButton}
          onClick={handleOpenCounselling}
        >
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

export default GraphicDesining;
