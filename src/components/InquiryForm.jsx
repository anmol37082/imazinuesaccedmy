"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./InquiryFormFloating.module.css";

const courseOptions = [
  "Graphic Designing",
  "Video Editing",
  "Digital Marketing",
  "Web Development",
  "Graphic Designing + Video Editing",
];

const WHATSAPP_NUMBER = "918882043435";
const SCROLL_TRIGGER = 280;

function InquiryForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [hasConsent, setHasConsent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_TRIGGER);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const isSubmitDisabled = useMemo(() => {
    return !selectedCourse || phone.trim().length < 10 || !hasConsent;
  }, [hasConsent, phone, selectedCourse]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLiveChat = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitDisabled) {
      return;
    }

    const message = [
      "New Counselling Inquiry - Imazineus Academy",
      `Course: ${selectedCourse}`,
      `Phone: ${phone.trim()}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    handleCloseModal();
  };

  return (
    <>
      <div
        className={`${styles.floatingBar} ${isVisible ? styles.floatingBarVisible : ""}`}
        aria-hidden={!isVisible}
      >
        <div className={styles.floatingBarCopy}>
          <span className={styles.floatingEmoji} aria-hidden="true">
            {"\u{1F615}"}
          </span>
          <p className={styles.floatingText}>
            Can&apos;t Decide Which Course Is Right For You?
          </p>
        </div>

        <button
          type="button"
          className={styles.floatingButton}
          onClick={() => setIsModalOpen(true)}
        >
          <span className={styles.desktopButtonLabel}>Get Free Counselling</span>
          <span className={styles.mobileButtonLabel}>Get Brochure</span>
        </button>

        <button
          type="button"
          className={styles.mobileChatButton}
          onClick={handleLiveChat}
        >
          Live Chat
          <span className={styles.chatIcon} aria-hidden="true">
            &#128172;
          </span>
        </button>
      </div>

      {isModalOpen && (
        <>
          <button
            type="button"
            className={styles.overlay}
            onClick={handleCloseModal}
            aria-label="Close counselling popup"
          />

          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="counselling-title"
          >
            <div className={styles.modalVisual}>
              <div className={styles.visualBackdrop} />
            </div>

            <div className={styles.modalContent}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleCloseModal}
                aria-label="Close popup"
              >
                &times;
              </button>

              <h2 className={styles.modalTitle} id="counselling-title">
                Get Free Counselling
              </h2>

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
                    <img
                      src="/flag.png"
                      alt="India flag"
                      className={styles.flag}
                    />
                    +91
                  </span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    name="phone"
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
                  You will receive updates on WhatsApp
                </p>

                <label className={styles.consent}>
                  <input
                    type="checkbox"
                    checked={hasConsent}
                    onChange={(event) => setHasConsent(event.target.checked)}
                  />
                  <span>
                    I agree to IIDE&apos;s <a href="#home">T&amp;C</a> and <a href="#home">Privacy Policy</a>. This consent overrides any DNC/NDNC registrations.
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
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default InquiryForm;
