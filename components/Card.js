import styles from "../styles/card.module.css";
import React from "react";
import IndvCard from "./indvCard";

const Card = ({ companies }) => {

  return (
    <div className={styles.rowFlex}>
      {companies.map((company) => (
        <IndvCard data={company}/>
      ))}
    </div>

  );
};

export default Card;
