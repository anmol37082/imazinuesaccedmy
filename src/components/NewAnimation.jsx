"use client";

import Image from "next/image";
import styles from './NewAnimation.module.css';
import { useRef, useState, useEffect, useCallback } from 'react';
import useMediaQuery from "@/hooks/useMediaQuery";

const mobileBannerImage = '/homepagemobileviewbanner.webp';
const imagePaths = [
  '/newanimation/image 1.png',
  '/newanimation/image 2.png',
  '/newanimation/image 3.png',
  '/newanimation/image 4.png',
  '/newanimation/image 5.png',
  '/newanimation/image 6.png',
  '/newanimation/image 7.png'
];

const imageStartTranslates = [46, 40, 54, 42, 56, 40, 50];
const imageTravelDistances = [112, 102, 126, 108, 132, 104, 120];
const imageStartOffsets = [0.02, 0.04, 0.06, 0.03, 0.07, 0.05, 0.08];
const imageTravelWindows = [0.78, 0.58, 0.82, 0.6, 0.84, 0.58, 0.8];
const imageStepCount = 48;
const activeStepProgressShare = 0.24;
const imageProgressBoosts = [1, 1.32, 1, 1.32, 1, 1.32, 1];
const imageStepPhases = [0, 11, 5, 17, 9, 21, 14];
const textStartTranslate = 320;
const textTravelDistance = 214;
const textStartOffset = 0.06;
const textTravelWindow = 0.8;

function NewAnimation() {
  const newAnimationRef = useRef(null);
  const [imageTranslates, setImageTranslates] = useState(Array(8).fill(100));
  const [isTextLoaded, setIsTextLoaded] = useState(false);
  const isMobileViewport = useMediaQuery("(max-width: 768px)");
  const isSafariRef = useRef(false);
  const rafIdRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const targetTranslatesRef = useRef(Array(8).fill(100));
  const currentTranslatesRef = useRef(Array(8).fill(100));

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    isSafariRef.current = /^((?!chrome|android).)*safari/i.test(ua) && !ua.includes('chrome');
  }, []);

  useEffect(() => {
    let frameId = 0;

    frameId = window.requestAnimationFrame(() => {
      setIsTextLoaded(true);
    });

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  const calculateTargets = useCallback(() => {
    const newAnimationRect = newAnimationRef.current?.getBoundingClientRect();
    if (!newAnimationRect) return;

    const viewportHeight = window.innerHeight;
    const sectionProgress = (
      viewportHeight - newAnimationRect.top
    ) / Math.max(viewportHeight + (newAnimationRect.height * 0.68), 1);
    const scrollProgress = Math.max(0, Math.min(1, sectionProgress));
    
    const newTargets = Array.from({ length: 8 }, (_, index) => {
      const isTextImage = index === 7;
      const startOffset = isTextImage ? textStartOffset : imageStartOffsets[index];
      const animationRange = isTextImage ? textTravelWindow : imageTravelWindows[index];

      let progress = (scrollProgress - startOffset) / animationRange;
      progress = Math.max(0, Math.min(1, progress));

      if (!isTextImage && progress > 0 && progress < 1) {
        const scaledProgress = (progress * imageStepCount) + imageStepPhases[index];
        const completedSteps = Math.floor(scaledProgress);
        const stepFraction = scaledProgress - completedSteps;
        const stepProgress = Math.min(1, completedSteps / imageStepCount);

        progress = Math.min(
          1,
          stepProgress + ((stepFraction * activeStepProgressShare) / imageStepCount)
        );
      }

      if (!isTextImage) {
        progress = Math.min(1, progress * imageProgressBoosts[index]);
      }

      const easedProgress = isTextImage
        ? 1 - Math.pow(1 - progress, 1.7)
        : 1 - Math.pow(1 - progress, 1.45);

      if (isTextImage) {
        return textStartTranslate - (textTravelDistance * easedProgress);
      }

      return imageStartTranslates[index] - (imageTravelDistances[index] * easedProgress);
    });

    targetTranslatesRef.current = newTargets;
  }, []);

  const interpolate = useCallback(function interpolateFrame() {
    const isSafari = isSafariRef.current;
    const lerpFactor = isSafari ? 0.11 : 0.035;
    
    let hasChanged = false;
    const newTranslates = currentTranslatesRef.current.map((current, i) => {
      const target = targetTranslatesRef.current[i];
      const diff = target - current;
      
      if (Math.abs(diff) < 0.1) return target;
      
      hasChanged = true;
      return current + diff * lerpFactor;
    });

    if (hasChanged) {
      currentTranslatesRef.current = newTranslates;
      setImageTranslates([...newTranslates]);
      rafIdRef.current = requestAnimationFrame(interpolateFrame);
    } else {
      rafIdRef.current = null;
    }
  }, []);

  const handleScroll = useCallback(() => {
    const now = performance.now();
    const isSafari = isSafariRef.current;
    const throttleMs = isSafari ? 24 : 14;
    
    if (now - lastScrollTimeRef.current < throttleMs) return;
    lastScrollTimeRef.current = now;

    calculateTargets();
    
    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(interpolate);
    }
  }, [calculateTargets, interpolate]);

  useEffect(() => {
    const options = isSafariRef.current 
      ? { passive: true, capture: true }
      : { passive: true };
    
    window.addEventListener('scroll', handleScroll, options);
    window.addEventListener('resize', calculateTargets, { passive: true });
    
    calculateTargets();
    setImageTranslates([...targetTranslatesRef.current]);
    currentTranslatesRef.current = [...targetTranslatesRef.current];
    return () => {
      window.removeEventListener('scroll', handleScroll, options);
      window.removeEventListener('resize', calculateTargets);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [handleScroll, calculateTargets]);

  const getImageStyle = (index) => ({
    transform: `translateY(${imageTranslates[index]}%)`,
    WebkitTransform: `translateY(${imageTranslates[index]}%) translate3d(0,0,0)`,
    willChange: 'transform',
  });

  const getTextStyle = () => ({
    transform: `translateX(-50%) translateY(${imageTranslates[7]}px)`,
    WebkitTransform: `translateX(-50%) translateY(${imageTranslates[7]}px) translate3d(0,0,0)`,
    willChange: 'transform',
  });

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
      </section>
    );
  }

  return (
    <section ref={newAnimationRef} className={styles.newAnimation}>
      <div className={styles.newAnimationStage}>
        <div className={styles.newAnimationBg}>
          <div className={styles.newAnimationImage} />
          
          <div
            className={`${styles.textImageWrap} ${isTextLoaded ? styles.textImageLoaded : ''}`}
          >
            <Image
              src="/newanimation/text.png"
              alt="Text Overlay"
              className={styles.textImage}
              style={getTextStyle()}
              width={1200}
              height={420}
              sizes="90vw"
              priority
            />
          </div>
          
          {Array.from({ length: 7 }, (_, index) => (
            <Image
              key={index}
              src={imagePaths[index]}
              alt={`New Animation ${index + 1}`}
              className={`${styles.newAnimImage} ${styles[`newAnimImage${index + 1}`]}`}
              style={getImageStyle(index)}
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
