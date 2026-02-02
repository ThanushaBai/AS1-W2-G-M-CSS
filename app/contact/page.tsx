import styles from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={`container ${styles.contactBox}`}>
      {/* 👆 GLOBAL + MODULE */}

      <h1 className="title">Contact Page</h1>

      <p className={styles.email}>
        Email: example@gmail.com
      </p>

      <Link href="/" className="link">Back to Home</Link>
    </div>
  );
}
