"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "./CareerPathShowcase.module.css";

const WHATSAPP_NUMBER = "918882043435";
const courseOptions = [
  "Graphic Designing",
  "Video Editing",
  "Digital Marketing",
  "Web Development",
  "Graphic Designing + Video Editing",
];

const courses = [
  {
    title: "Advanced Graphic Designing Course with Brand Identity Specialisation",
    tag: "Offline + Online",
    highlights: [
      "4-6 Months Practical Program",
      "100% Portfolio Development Assistance",
      "Logo, Packaging and Social Media Design Projects",
      "Preferred By: Freshers, Students and Freelancers",
    ],
    deadline: "Application Deadline: April 19, 2026",
    accent: "linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)",
  },
  {
    title: "Professional Video Editing Course with Content Creation Specialisation",
    tag: "Live + Offline",
    highlights: [
      "4-6 Months Practical Program",
      "100% Editing Workflow Assistance",
      "Reels, Ads and Documentary Style Editing Practice",
      "Preferred By: Content Creators, Students and Editors",
    ],
    deadline: "Application Deadline: April 21, 2026",
    accent: "linear-gradient(135deg, #111827 0%, #0f766e 100%)",
  },
  {
    title: "Online Digital Marketing Course with Generative AI Specialisation",
    tag: "Live + Online",
    highlights: [
      "4-6 Months Online Program",
      "100% Career Growth Assistance",
      "Optional 2-Week Campus Immersion with Industry Visit",
      "Preferred By: College Students, Working Professionals (3+ Years of Work Ex)",
    ],
    deadline: "Application Deadline: April 17, 2026",
    accent: "linear-gradient(135deg, #166534 0%, #00a63e 100%)",
  },
];

function CareerPathShowcase() {
  const isMobileViewport = useMediaQuery("(max-width: 820px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [hasConsent, setHasConsent] = useState(true);

  useEffect(() => {
    if (isMobileViewport) {
      return undefined;
    }

    const slideDelay = 3600;
    const slideDuration = 850;

    const startTimer = window.setTimeout(() => {
      setIsAnimating(true);
    }, slideDelay);

    const resetTimer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % courses.length);
      setIsAnimating(false);
    }, slideDelay + slideDuration);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(resetTimer);
    };
  }, [activeIndex, isMobileViewport]);

  const slidingCourses = useMemo(() => {
    if (isMobileViewport) {
      return courses;
    }

    return [
      courses[activeIndex],
      courses[(activeIndex + 1) % courses.length],
      courses[(activeIndex + 2) % courses.length],
    ];
  }, [activeIndex, isMobileViewport]);

  const isSubmitDisabled =
    !selectedCourse || phone.trim().length < 10 || !hasConsent;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitDisabled) {
      return;
    }

    const message = [
      "New Course Inquiry - Imazineus Academy",
      `Course: ${selectedCourse}`,
      `Phone: ${phone.trim()}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Choose A Career Path That Fits You</h2>
        <p className={styles.subtitle}>
          Explore the best-fit program for your learning style and career goals.
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.courseViewport}>
          <div
            className={`${styles.courseRail} ${
              !isMobileViewport && isAnimating ? styles.courseRailAnimating : ""
            }`}
          >
            {slidingCourses.map((course) => (
              <article key={course.title} className={styles.courseCard}>
                <div
                  className={styles.cardVisual}
                  style={{ background: course.accent }}
                >
                  <span className={styles.cardTag}>{course.tag}</span>
                  <div className={styles.visualGlow} />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{course.title}</h3>

                  <ul className={styles.highlightList}>
                    {course.highlights.map((item) => (
                      <li key={item} className={styles.highlightItem}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className={styles.deadline}>{course.deadline}</p>

                  <button type="button" className={styles.brochureButton}>
                    Download Brochure
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.enquiryCard} id="career-path-enquiry">
          <h3 className={styles.enquiryTitle}>
            Your <br /> Future Starts with a Conversation
          </h3>
          <p className={styles.enquirySubtitle}>
            Speak to our program advisors
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.selectField}>
              <select
                value={selectedCourse}
                onChange={(event) => setSelectedCourse(event.target.value)}
                className={styles.select}
                required
              >
                <option value="">Select the course</option>
                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.phoneField}>
              <span className={styles.countryCode}>
                <Image
                  src="/flag.png"
                  alt="India flag"
                  width={18}
                  height={18}
                  className={styles.flag}
                />
                +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value.replace(/[^\d]/g, "").slice(0, 10))
                }
                className={styles.phoneInput}
                placeholder="Enter phone number"
                required
              />
            </label>

            <p className={styles.whatsappHint}>
              You will receive updates on
              <br />
              WhatsApp
            </p>

            <label className={styles.consent}>
              <input
                type="checkbox"
                checked={hasConsent}
                onChange={(event) => setHasConsent(event.target.checked)}
              />
              <span>
                I agree to IIDE&apos;s <a href="#home">T&amp;C</a> and{" "}
                <a href="#home">Privacy Policy</a>. This consent overrides any
                DNC/NDNC registrations.
              </span>
            </label>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitDisabled}
            >
              Proceed
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}

export default CareerPathShowcase;
