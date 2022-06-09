import styles from "../styles/card.module.css";
import Image from "next/image";
import Link from "next/link";
import fail from "../public/favicon.ico";

export default function card({ Name, Sector }) {
  return (
    <Link href={`/${Name}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src={fail} height={100} width={100}  className={styles.forImage}/>
        </div>
        <div className={styles.title}>
          <h1 className={styles.headerText}>{Name}</h1>
        </div>
        <div className={styles.description}>
          <p className={styles.description}> asdasd sdsadas</p>
        </div>
      </div>
    </Link>
  );
}
