import styles from "../styles/card.module.css";
import React from "react";
import IndvCard from "./indvCard";

const Card = ({ companies }) => {
  const cardsPerRow = 3;
  var styledCols = [];
  var comps = [...companies];
  while (comps.length > 0) {
    styledCols.push(comps.splice(0, cardsPerRow));
  }

  return (
    // <div className={styles.colFlex}>
    //   {styledCols.map((styledCol) => (
    //     <div className={styles.rowFlex}>
    //       {styledCol.map((item) => (
    //         <IndvCard data={item}/>
    //       ))}
    //     </div>
    //   ))}
    // </div>

    <div className={styles.rowFlex}>
      {companies.map((company) => (
        <IndvCard data={company}/>
      ))}
    </div>


    // <div className={styles.colFlex}>
    //   <div className={styles.rowFlex}>
    //     {companies.map(company => (

    //         <Link href={`/${company.Name}`}>
    //           <div className={styles.card}>

    //           {company.Name}
    //           </div>
    //         </Link>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Card;
