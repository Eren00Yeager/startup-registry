import styles from "../styles/card.module.css";
import React from "react";
import IndvCard from "./indvCard";

const Card = ({ companies,setSinglecomp }) => {

  return (
    <div className={styles.rowFlex}>
      {companies.map((company,id) => (
        <IndvCard key={id} data={company} setSinglecomp={setSinglecomp}/>
      ))}
    </div>

  );
};

export default Card;
