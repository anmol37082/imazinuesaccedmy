"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "./NewAnimation.module.css";

const mobileBannerImage = "/homepagemobileviewbanner3.webp";

const imageConfigs = [
  {
    src: "/newanimation/image 1.png",
    startTranslate: 46,
    travelDistance: 112,
    startOffset: 0,
    travelWindow: 0.78,
    progressBoost: 1.1,
  },
  {
    src: "/newanimation/image 2.png",
    startTranslate: 40,
    travelDistance: 102,
    startOffset: 0.01,
    travelWindow: 0.58,
    progressBoost: 1.28,
  },
  {
    src: "/newanimation/image 3.png",
    startTranslate: 54,
    travelDistance: 126,
    startOffset: 0.02,
    travelWindow: 0.82,
    progressBoost: 1.1,
  },
  {
    src: "/newanimation/image 4.png",
    startTranslate: 42,
    travelDistance: 108,
    startOffset: 0.01,
    travelWindow: 0.6,
    progressBoost: 1.28,
  },
  {
    src: "/newanimation/image 5.png",
    startTranslate: 56,
    travelDistance: 132,
    startOffset: 0.02,
    travelWindow: 0.84,
    progressBoost: 1.1,
  },
  {
    src: "/newanimation/image 6.png",
    startTranslate: 40,
    travelDistance: 104,
    startOffset: 0.01,
    travelWindow: 0.58,
    progressBoost: 1.28,
  },
  {
    src: "/newanimation/image 7.png",
    startTranslate: 50,
    travelDistance: 120,
    startOffset: 0.02,
    travelWindow: 0.8,
    progressBoost: 1.1,
  },
];

const textConfig = {
  startTranslate: 320,
  travelDistance: 214,
  startOffset: 0.06,
  travelWindow: 0.8,
};

const initialTransforms = [
  ...imageConfigs.map(({ startTranslate }) => startTranslate),
  textConfig.startTranslate,
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function NewAnimation() {
  const newAnimationRef = useRef(null);
  const frameRef = useRef(null);
  const [transforms, setTransforms] = useState(initialTransforms);
  const [isTextLoaded, setIsTextLoaded] = useState(false);
  const isMobileViewport = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsTextLoaded(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (isMobileViewport) return undefined;

    const updateTransforms = () => {
      const sectionRect = newAnimationRef.current?.getBoundingClientRect();
      if (!sectionRect) return;

      const viewportHeight = window.innerHeight;
      const rawProgress =
        (viewportHeight - sectionRect.top) /
        Math.max(viewportHeight + sectionRect.height * 0.68, 1);
      const scrollProgress = clamp(rawProgress, 0, 1);

      const nextTransforms = imageConfigs.map((config) => {
        const progress = clamp(
          ((scrollProgress - config.startOffset) / config.travelWindow) *
            config.progressBoost,
          0,
          1
        );
        const easedProgress = 1 - Math.pow(1 - progress, 1.45);

        return config.startTranslate - config.travelDistance * easedProgress;
      });

      const textProgress = clamp(
        (scrollProgress - textConfig.startOffset) / textConfig.travelWindow,
        0,
        1
      );
      const easedTextProgress = 1 - Math.pow(1 - textProgress, 1.7);

      nextTransforms.push(
        textConfig.startTranslate -
          textConfig.travelDistance * easedTextProgress
      );

      setTransforms((currentTransforms) => {
        const hasChanged = currentTransforms.some(
          (value, index) => Math.abs(value - nextTransforms[index]) > 0.1
        );

        return hasChanged ? nextTransforms : currentTransforms;
      });
    };

    const requestUpdate = () => {
      if (frameRef.current) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateTransforms();
      });
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isMobileViewport]);

  if (isMobileViewport) {
    return (
      <section className={styles.mobileBannerSection}>
        <Image
          src={mobileBannerImage}
          alt="Imazine Us Academy mobile banner"
          className={styles.mobileBannerImage}
          width={900}
          height={1600}
          sizes="100vw"
          priority
        />
        <div className={styles.mobileBannerContent}>
          <p className={styles.mobileBannerTag}>Design Academy</p>
          <h1 className={styles.mobileBannerTitle}>
            LET&apos;S
            <br />
             DESIGN
            <br />
            SOMETHING
            <br />
             CREATIVE
          </h1>
          <p className={styles.mobileBannerSubtitle}>
            Let&apos;s find out how strategy,  <br /> powerful learning &amp;
           
            creative minds can Change Yooouu.....
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={newAnimationRef} className={styles.newAnimation}>
      <div className={styles.newAnimationStage}>
        <div className={styles.newAnimationBg}>
          <div className={styles.newAnimationImage} />

          <div
            className={`${styles.textImageWrap} ${
              isTextLoaded ? styles.textImageLoaded : ""
            }`}
          >
            <Image
              src="/newanimation/text.png"
              alt="Text Overlay"
              className={styles.textImage}
              style={{
                transform: `translateX(-50%) translateY(${transforms[7]}px)`,
              }}
              width={1200}
              height={420}
              sizes="90vw"
              priority
            />
          </div>

          {imageConfigs.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={`New Animation ${index + 1}`}
              className={`${styles.newAnimImage} ${styles[`newAnimImage${index + 1}`]}`}
              style={{ transform: `translateY(${transforms[index]}%)` }}
              width={420}
              height={720}
              sizes="14vw"
            />
          ))}

          <div className={styles.newOverlay} />
        </div>
      </div>
    </section>
  );
}

export default NewAnimation;
