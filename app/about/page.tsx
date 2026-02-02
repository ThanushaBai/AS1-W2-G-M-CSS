import styles from "./about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={`container ${styles.aboutBox}`}>
      {/* 👆 GLOBAL + MODULE used together */}

      <h1 className="title">About Page</h1>

      <p className={styles.highlight}>
        This page uses CSS Module styling.
      </p>

      <Link href="/" className="link">Back to Home</Link>
    </div>
  );
}
