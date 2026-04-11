import Image from "next/image";
import styles from "./HomeBanner3.module.css";

function HomeBanner3() {
  return (
    <section className={styles.bannerSection}>
      <picture>
        <source
          media="(max-width: 540px)"
          srcSet="/mobileviewbanner3.webp"
        />
        <Image
          className={styles.bannerImage}
          src="/HomepageBanner3copy.webp"
          alt="Imazine Us Academy home banner"
          width={1600}
          height={900}
          sizes="100vw"
        />
      </picture>
    </section>
  );
}

export default HomeBanner3;
