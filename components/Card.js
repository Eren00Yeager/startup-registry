import styles from "../styles/card.module.css";
import Link from "next/link";
import React from 'react';

const Card = ({ companies }) => {
  
  return (
    <ul>
      {companies.map(company => ( 
        <li >
          <Link href={`/${company.Name}`}>{company.Name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Card;
