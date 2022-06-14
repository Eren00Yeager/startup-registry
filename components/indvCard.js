import styles from "../styles/card.module.css";
import Image from "next/image";
import Link from "next/link";
import fail from "../public/dummy.jpg";

const IndvCard = ({ data }) => {
  return (
    <Link href={`/${data.Name}`}>
      <div className={styles.colFlex2}>
        <Image
          className={styles.forImage}
          src={fail}
          height={200}
          width={100}
        />
        <div className={styles.Valuation}>$120</div>
        <div className={styles.headPtext}>{data.Name}</div>
        <div className={styles.pText}>{data.Sector}</div>
        <div className={styles.pText}>{data.Stage}</div>
        <div className={styles.pText}>boAt is the world's 5th largest wearable brand along with India’s No.1 Earwear brand.</div>
      </div>
    </Link>
  );
};

export default IndvCard;
