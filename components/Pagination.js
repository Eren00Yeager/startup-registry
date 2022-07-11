import React from "react";
import styles from "../styles/card.module.css";

const Pagination = ({ lastPage, currPage, paginate }) => {
  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalComps / compsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  return (
      <div className={styles.paginationComp}>
        <div style={{justifyContent:"center"}}>
          {currPage === 1 ? (
             <button disabled className={styles.pageLink1}>Previous</button>
          ) : (
            <button onClick={() => paginate(currPage - 1)} className={styles.pageLink}>Previous</button>
          )}
        </div>
        <div>
          {currPage === lastPage ? (
            <button disabled className={styles.pageLink1}>Next</button>
          ) : (
            <button onClick={() => paginate(currPage + 1)} className={styles.pageLink}>Next</button>
          )}
        </div>
      </div>

    // <nav>
    //   <ul className={`${styles.paginationComp} pagination`}>
    //     {pageNumbers.map(number => (
    //       <li key={number} className='page-item' style={{padding:'1vh'}}>
    //         <a onClick={() => paginate(number)} className={`${styles.pageLink} page-link`} style={{'backgroundColor':'#442ccec2','color':'white','borderRadius':'10px'}}>
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>

    // </nav>
  );
};

export default Pagination;
