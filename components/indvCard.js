import styles from "../styles/card.module.css";
import Link from "next/link";
import Image from 'next/image';

const IndvCard = ({ data,setSinglecomp }) => {

   let str = data.Logo;
   str = str.slice(32, 65);

   let str2 = data.Shortbrief;
   let s = "";
   if(str2){
   const iterator = str2[Symbol.iterator]();
   let theChar = iterator.next();
  
   while (!theChar.done && (theChar.value !== '.' || (s.length < 10))) {
       s = s + theChar.value
       theChar = iterator.next();
   }}
  

  return (
    <div onClick={()=>setSinglecomp(data)}>
     <button className={styles.forButton}>
      <div className={styles.colFlex2}>
      <Image
    className={styles.forImage}
      src={`http://drive.google.com/uc?export=view&id=${str}`}
      alt="Picture of the author"
      width={500}
      height={500}
    />
      
        <div className={styles.Valuation}>{data.Valuation}</div>
        <div className={styles.headPtext}>{data.Name}</div>
        <p className={styles.pText}>{`${s}`}</p>
      </div>
      </button>
    </div>
  );
};

export default IndvCard;
