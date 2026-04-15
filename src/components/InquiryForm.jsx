"use client";
import { useEffect, useMemo, useState } from "react";
import { submitEnquiry } from "@/utils/submitEnquiry";
import styles from "./InquiryFormFloating.module.css";

const courseOptions = [
  "Graphic Designing",
  "Video Editing",
  "Digital Marketing",
  "Web Development",
  "Graphic Designing + Video Editing",
];

const SCROLL_TRIGGER = 280;
const OPEN_COUNSELLING_EVENT = "openCounsellingModal";

function InquiryForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [phone, setPhone] = useState("");
  const [hasConsent, setHasConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_TRIGGER);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || isSuccessOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, isSuccessOpen]);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };

    window.addEventListener(OPEN_COUNSELLING_EVENT, handleOpenModal);

    return () => {
      window.removeEventListener(OPEN_COUNSELLING_EVENT, handleOpenModal);
    };
  }, []);

  useEffect(() => {
    const footerElement = document.getElementById("contact-us");

    if (!footerElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(footerElement);

    return () => observer.disconnect();
  }, []);

  const isSubmitDisabled = useMemo(() => {
    return !selectedCourse || phone.trim().length < 10 || !hasConsent;
  }, [hasConsent, phone, selectedCourse]);

  const resetForm = () => {
    setSelectedCourse("");
    setPhone("");
    setHasConsent(true);
    setSubmitError("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSubmitError("");
  };

  const handleCloseSuccess = () => {
    setIsSuccessOpen(false);
  };

  const handleLiveChat = () => {
    window.dispatchEvent(new CustomEvent(OPEN_COUNSELLING_EVENT));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitDisabled) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitEnquiry({
        course: selectedCourse,
        phone: phone.trim(),
        source: "floating-form",
      });
      handleCloseModal();
      setIsSuccessOpen(true);
      resetForm();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit enquiry right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className={`${styles.floatingBar} ${
          isVisible && !isFooterVisible ? styles.floatingBarVisible : ""
        }`}
        aria-hidden={!isVisible || isFooterVisible}
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
                  Our team will contact you shortly.
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

                {submitError ? (
                  <p className={styles.errorText} role="alert">
                    {submitError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitDisabled || isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Proceed"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {isSuccessOpen && (
        <>
          <button
            type="button"
            className={styles.overlay}
            onClick={handleCloseSuccess}
            aria-label="Close thank you popup"
          />

          <div
            className={styles.successModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
          >
            <button
              type="button"
              className={styles.successCloseButton}
              onClick={handleCloseSuccess}
              aria-label="Close thank you popup"
            >
              &times;
            </button>

            <div className={styles.successIcon} aria-hidden="true">
              &#10003;
            </div>

            <p className={styles.successBadge}>Enquiry Received</p>

            <h2 className={styles.successTitle} id="success-title">
              Thank You!
            </h2>
            <p className={styles.successText}>
              Your enquiry has been submitted successfully. Our counselling team
              will review it and call you shortly.
            </p>
            <p className={styles.successHighlight}>
              Keep your phone nearby for the next step.
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default InquiryForm;
