import styles from "../styles/card.module.css";
import Link from "next/link";
import Image from 'next/image';

const IndvCard = ({ data }) => {

   let str = data.Logo;
   str = str.slice(32, 65);

  return (
    <Link href={`/${data.Name}`}>
     <button className={styles.forButton}>
      <div className={styles.colFlex2}>
      <Image
    className={styles.forImage}
      src={`http://drive.google.com/uc?export=view&id=${str}`}
      alt="Picture of the author"
      width={500}
      height={500}
    />
      
        <div className={styles.Valuation}>$120</div>
        <div className={styles.headPtext}>{data.Name}
        </div>
        <div className={styles.pText}>{data.Sector}</div>
        <div className={styles.pText}>{data.Stage}</div>
        <div className={styles.pText}>boAt is the world's 5th largest wearable brand along with India’s No.1 Earwear brand.</div>
      </div>
      </button>

    </Link>
  );
};

export default IndvCard;
