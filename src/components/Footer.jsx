"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

const OPEN_COUNSELLING_EVENT = "openCounsellingModal";
const WHATSAPP_NUMBER = "918882043435";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleOpenCounselling = (event) => {
    event.preventDefault();
    window.dispatchEvent(new Event(OPEN_COUNSELLING_EVENT));
  };

  return (
    <footer className={styles.footer} id="contact-us">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* About Section */}
          <div className={styles.section}>
            <h4 className={styles.heading}>Imazinus Academy</h4>
            <p className={styles.text}>
              Leading creative training center offering professional courses in
              Graphic Designing, Video Editing, and Digital Marketing with
              expert instructors.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/imazineusacademy/" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instaIcon}`} title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="4.5" ry="4.5"/>
                  <path d="M16.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor"/>
                  <circle cx="12" cy="12" r="4.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/Imazine.Us.Academy" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.fbIcon}`} title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${styles.section} ${styles.offsetSection}`}>
            <ul className={styles.list}>
              <li>
                <Link href="#home" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className={styles.link}>
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="#inquiry"
                  className={styles.link}
                  onClick={handleOpenCounselling}
                >
                  Enroll Now
                </Link>
              </li>
              <li>
                <Link href="#reviews" className={styles.link}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className={`${styles.section} ${styles.offsetSection}`}>
            <ul className={styles.list}>
              <li>
                <span className={styles.link}>Graphic Designing</span>
              </li>
              <li>
                <span className={styles.link}>Video Editing</span>
              </li>
              <li>
                <span className={styles.link}>Digital Marketing</span>
              </li>
              <li>
                <span className={styles.link}>Web Development</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`${styles.section} ${styles.contactSection}`}>
            <h4 className={styles.heading}>Contact</h4>
            <div className={styles.contactInfo}>
              <p className={styles.text}>
                <strong>Location:</strong> Zirakpur, Punjab
              </p>
              <p className={styles.text}>
                <strong>Hours:</strong> Mon - Sat: 10 AM - 6 PM
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCard}
            >
              <span className={styles.whatsappHelp}>Need Help</span>
              <span className={styles.whatsappIcon} aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                </svg>
              </span>
              <span className={styles.whatsappText}>WhatsApp Me</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Imazinus Academy. All rights reserved.
          </p>
          <p className={styles.cta}>
            Ready to learn?{" "}
            <Link
              href="#inquiry"
              className={styles.ctaLink}
              onClick={handleOpenCounselling}
            >
              Enroll today
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
