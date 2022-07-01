import Link from 'next/link';
import React from 'react';
import {Row,Col} from 'react-bootstrap'
import styles from '../styles/card.module.css'


const Pagination = ({ compsPerPage, totalComps, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalComps / compsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={`${styles.paginationComp} pagination`}>
        {pageNumbers.map(number => (
          <li key={number} className='page-item' style={{padding:'1vh'}}>
            <a onClick={() => paginate(number)} className={`${styles.pageLink} page-link`} style={{'backgroundColor':'#442ccec2','color':'white','borderRadius':'10px'}}>
              {number}
            </a>
          </li>  
        ))}
      </ul>  
      
    </nav>
  );
};

export default Pagination;