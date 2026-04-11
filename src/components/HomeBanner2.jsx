import Image from "next/image";
import styles from "./HomeBanner2.module.css";

function HomeBanner2() {
  return (
    <section className={styles.bannerSection}>
      <picture>
        <source media="(max-width: 540px)" srcSet="/banner2mobileview.webp" />
        <Image
          className={styles.bannerImage}
          src="/Homepage Banner 2 copy.webp"
          alt="Imazine Us Academy secondary banner"
          width={1600}
          height={900}
          sizes="100vw"
        />
      </picture>
    </section>
  );
}

export default HomeBanner2;
